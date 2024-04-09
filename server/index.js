import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoute.js';
import postRoutes from './routes/postRoute.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('./uploads'));

app.use('/user', userRoutes);
app.use('/post', postRoutes);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
