import expressAsyncHandler from 'express-async-handler';
import { sendEmail } from '../../services/email.js';
import { getHtmlText } from '../../services/html.js';
import User from '../../model/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existingEmail = await User.findOne({ email });

  if (existingEmail?._id) {
    res.status(400).send({ message: 'Пользователь с таким email уже существует' });
  }

  const hashedPassword = await bcrypt.hash(password, 1);

  const user = await User.create({ email, password: hashedPassword });

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  //   sendEmail(email, 'Регистрация', getHtmlText('Михаил', ''));
  res.send(token);
});

export default register;
