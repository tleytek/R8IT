const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// Post Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  skill: { type: Array, default: [25, 8.333333333333334] },
  cloudinaryRef: { type: String, required: true },
  challengeId: {
    type: ObjectId,
    ref: "Challenge",
    required: true
  },
  userId: { type: ObjectId, ref: "User", required: true },
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("posts", postSchema);
