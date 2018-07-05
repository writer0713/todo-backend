const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const moment = require('moment');
const db = require('./db');

const todosRouter = require('./routers/todos');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.get('/', (req, res) => {
  let date = new Date();
  res.status(200).send('welcome to jtodo :: ' + moment(date).format('YYYY-MM-DD'));
});

app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log('server is on port ' + port);
});