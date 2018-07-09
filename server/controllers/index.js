const moment = require('moment');

module.exports.showIndex = function(req, res) {
  let date = new Date();
  res.status(200).send('welcome to jtodo :: ' + moment(date).format('YYYY-MM-DD'));
};