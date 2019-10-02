const mongoose = require("mongoose");
const trueskill = require("trueskill");
const Post = mongoose.model("posts");
const Challenge = mongoose.model("challenges");
const cloudinary = require("cloudinary");
const config = require("../config/cloudinaryConfig");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

exports.prepareBattle = async (req, res) => {
  // Pick a random challenge, pick 2 random posts from that challenge category then return the results
  randomChallenge = await Challenge.aggregate([{ $sample: { size: 1 } }]);
  randomPosts = await Post.aggregate([
    { $match: { challengeId: randomChallenge[0]._id } },
    { $sample: { size: 2 } }
  ]);

  randomPosts.forEach(post => {
    post.cloudinaryUrl = cloudinary.url(
      post.cloudinaryRef,
      config.cloudinary.standardTransformation
    );
  });
  res.json({ competitors: randomPosts, currentChallenge: randomChallenge[0] });
};

exports.saveResult = async (req, res) => {
  // Calculate the changed skill
  await trueskill.AdjustPlayers(req.body);

  // loop through each player from req.body and use their id to modify the old skill value in the DB
  for (const { _id, skill } of req.body) {
    await Post.findByIdAndUpdate({ _id }, { skill });
  }
  res.json();
};
