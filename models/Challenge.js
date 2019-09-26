const mongoose = require('mongoose');

// Challenge Schema
const challengeSchema = new mongoose.Schema({
  postedBy: { type: mongoose.Schema.ObjectId },
  verb: { type: String, required: true, trim: true, lowercase: true },
  noun: { type: String, required: true, trim: true, lowercase: true },
  safe: { type: Boolean, required: true, default: 'false' },
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('challenges', challengeSchema);
