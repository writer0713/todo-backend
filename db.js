const mongoose = require('mongoose');
const connection = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/local');

connection.on('error', (err) => {
  console.log('mongo connection error');
});

connection.once('open', () => {
  console.log('mongo db connection success !');
});

