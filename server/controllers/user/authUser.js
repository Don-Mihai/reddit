import expressAsyncHandler from 'express-async-handler';
import User from '../../model/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// @desc    Авторизирует пользователя
// @route   POST /api/user/auth
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!email?.id) {
    res.status(400).send({ errorMessage: 'Неправильный email' });
  }

  const isPasswordValid = await bcrypt.compare(password, user?.password);

  if (!isPasswordValid) {
    return res.status(401).send({ errorMessage: 'Неправильный пароль' });
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  res.status(200).send({ token });
});

export default authUser;
