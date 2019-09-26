const mongoose = require("mongoose");
const moment = require("moment");
const eloRank = require("elo-rank");
const Post = mongoose.model("posts");
const cloudinary = require("cloudinary");
const datauri = require("datauri");
const path = require("path");

const config = {
  cloudinary: {
    standardTransformation: {
      border: "2px_solid_rgb:000000",
      flags: "awebp",
      gravity: "center",
      height: 400,
      quality: "auto",
      radius: 14,
      width: 400,
      crop: "fill",
      format: "webp"
    }
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

//Hoping to change this by implementing the amount of games an image has played, this ensures a more fair system.
//K = 40, for a player new to the rating list until the completion of events with a total of 30 games, as long as their rating remains under 2300.
//K = 20, for players with a rating always under 2400.
//K = 10, for players with any published rating of at least 2400 and at least 30 games played in previous events. Thereafter it remains permanently at 10
const elo = new eloRank(20);

// Calculates Elo
const calculateWinner = (winner, loser) => {
  let expectedScore = elo.getExpected(winner.eloRank, loser.eloRank);
  let newScore = elo.updateRating(expectedScore, 1, winner.eloRank);
  return newScore;
};

const calculateLoser = (loser, winner) => {
  let expectedScore = elo.getExpected(loser.eloRank, winner.eloRank);
  let newScore = elo.updateRating(expectedScore, 0, loser.eloRank);
  return newScore;
};

exports.postCloudinaryImage = (req, res) => {
  console.log(req);
};

exports.getPosts = async (req, res) => {
  let query = {};

  if (period) {
    let calculatedPeriod;

    switch (period) {
      case "24 Hours":
        calculatedPeriod = moment().subtract(1, "days");
        break;
      case "Last Week":
        calculatedPeriod = moment().subtract(1, "weeks");
        break;
      case "Last Month":
        calculatedPeriod = moment().subtract(1, "months");
        break;
      case "Last Year":
        calculatedPeriod = moment().subtract(1, "years");
        break;
      default:
        calculatedPeriod = moment().subtract(1, "years");
        break;
    }

    query.dateCreated = { $gte: calculatedPeriod.toISOString() };
  }

  if (challengeId) {
    query.challengeId = challengeId;
  }

  const posts = await Post.find(query)
    .limit(20)
    .sort("-eloRank");

  res.json(posts);
};

exports.getPost = async (req, res) => {
  const { postId } = req.body;
  const post = await Post.findById(postId);
  post.image = await getCloudinaryImage(post.cloudinaryRef);
  res.json(post);
};

exports.getRandomPosts = async (req, res) => {
  // Pick a random challenge, pick 2 random posts from that challenge category then return the results
  randomChallenge = Challenge.aggregate([{ $sample: { size: 1 } }]);
  randomPosts = db.Post.aggregate([
    { $match: { challengeId: randomChallenge[0]._id } },
    { $sample: { size: 2 } }
  ]);
  res.json(randomPosts);
  // .then(posts => {
  //   // Creating a property on the post object that adds the cloudinary url
  //   posts.forEach(post => {
  //     post.cloudinaryUrl = getCloudinaryUrl(post.cloudinaryRef);
  //   });
  //   cb({ challenge: challenges[0], posts });
  // });
};

exports.saveResult = async (req, res) => {
  const winner = await Post.findByIdAndUpdate(
    { _id: winnerId },
    { eloRank: calculateWinner(winner, loser) }
  );

  const loser = await Post.findByIdAndUpdate(
    { _id: loserId },
    { eloRank: calculateLoser(loser, winner) }
  );
};

exports.submitPost = async (req, res) => {
  req.body.userId = req.user._id; // assign user id from session

  const dUri = new datauri();

  const image = dUri.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );

  const { title, description, challengeId } = req.body;

  cloudinaryRef = await cloudinary.uploader.upload(image.content);

  const post = await new Post({
    title,
    description,
    cloudinaryRef: cloudinaryRef.public_id,
    challengeId,
    userId: req.user._id
  }).save();
  res.json(post);
};
