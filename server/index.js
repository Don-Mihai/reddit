import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoute.js';
import postRoutes from './routes/postRoute.js';
import conectDb from './config/bd.js';
import env from 'dotenv';
import { Server } from 'socket.io';

env.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('./uploads'));

conectDb();

app.use('/user', userRoutes);
app.use('/post', postRoutes);

const server = app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// Обработчик подключения нового клиента
io.on('connection', (socket) => {
  // Событие подключения клиента к определенному чату
  socket.on('joinChat', async (chatId) => {
    console.log(`Client joined chat: ${chatId}`);

    // Присоединение клиента к комнате
    socket.join(chatId);

    // Загрузка и отправка истории сообщений только для этой комнаты
    try {
      let chat = await Chat.findOne({ chatId }).populate('messages.sender', 'firstName surname login');
      if (!chat) {
        // If the chat doesn't exist, create a new one
        chat = new Chat({ chatId, messages: [] });
        await chat.save();
      }
      const messages = chat.messages;
      socket.emit('chatHistory', messages);
    } catch (error) {
      console.error(`Failed to fetch chat history for chat ${chatId}:`, error);
    }
  });

  // Событие отправки сообщения
  socket.on('sendMessage', async (data) => {
    const { senderId, chatId, text } = data;

    try {
      const sender = await User.findById(senderId);
      // Find or create the chat document
      let chat = await Chat.findOne({ chatId });
      if (!chat) {
        chat = new Chat({ chatId, messages: [] });
        await chat.save();
      }

      // Save the message in the database
      const message = {
        sender,
        text,
      };
      chat.messages.push(message);
      await chat.save();

      console.log(`New message in chat ${chatId}:`, message);

      // Send the new message to the room
      io.to(chatId).emit('message', message);
    } catch (error) {
      console.error('Failed to save message:', error);
    }
  });

  // Обработчик отключения клиента
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
