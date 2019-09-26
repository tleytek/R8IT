const mongoose = require('mongoose');

// Rating Schema
const historySchema = new mongoose.Schema({
  challenger: { type: mongoose.Types.ObjectId, ref: 'Post', required: true },
  challengee: {
    type: mongoose.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  dateCreated: { type: Date, default: Date.now }
});

mongoose.model('history', historySchema);
