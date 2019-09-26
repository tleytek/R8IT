const mongoose = require('mongoose');
const History = mongoose.model('history');

exports.recordHistory = (req, res) => {
  const history = new History(req.body).save();
  res.json(history);
};
