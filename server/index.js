import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sendEmail } from './services/email.js';
import { getHtmlText } from './services/html.js';
import { sendMessage } from './services/telegram.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/user/register', (req, res) => {
  const { email } = req.body;

  sendEmail(email, 'Регистрация', getHtmlText('Михаил', ''));
  res.send('');
});

app.get('/user', (req, res) => {
  sendMessage('Вечер в хату');

  res.send('');
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
