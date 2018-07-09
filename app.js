const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

require('./db');

const todosRouter = require('./routers/todos');
const indexRouter = require('./routers/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/', indexRouter);

app.use('/todos', todosRouter);

app.listen(port, () => {
  console.log('server is on port ' + port);
});