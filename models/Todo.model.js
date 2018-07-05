const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {type: String, required: true},
  isDone: {type: String, required: true, default: false},
  time: {type: Date, required: true, default: moment().format('l')}
});

module.exports = mongoose.model('todo', TodoSchema);