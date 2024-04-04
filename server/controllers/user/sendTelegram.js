import expressAsyncHandler from 'express-async-handler';
import { sendMessage } from '../../services/telegram.js';

const sendTelegram = expressAsyncHandler((req, res) => {
  sendMessage('Вечер в хату');

  res.send('');
});

export default sendTelegram;
