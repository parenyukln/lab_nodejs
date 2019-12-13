import express from 'express';
const app = express();
import indexRouter from './routes/index';

app.use(express.static(__dirname + './public/styles'));

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});