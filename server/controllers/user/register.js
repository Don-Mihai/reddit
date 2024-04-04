import expressAsyncHandler from 'express-async-handler';
import { sendEmail } from '../../services/email.js';
import { getHtmlText } from '../../services/html.js';

const register = expressAsyncHandler((req, res) => {
  const { email } = req.body;

  //   sendEmail(email, 'Регистрация', getHtmlText('Михаил', ''));
  res.send(email);
});

export default register;
