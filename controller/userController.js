const mongoose = require("mongoose");

exports.getUserId = (req, res) => {
  res.send(req.user);
};
