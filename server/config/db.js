const mongoose = require('mongoose');
const config = require('./config');
const connection = mongoose.connection;

mongoose.connect(config.db.url);

connection.on('error', (err) => {
  console.log('mongo connection error');
});

connection.once('open', () => {
  console.log('mongo db connection success !');
});

