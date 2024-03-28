import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/user', (req, res) => {
  const data = req.body;

  const user = {
    name: 'John',
    age: 25,
  };

  res.send(user);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
