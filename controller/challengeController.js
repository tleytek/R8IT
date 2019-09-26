const mongoose = require("mongoose");
const Challenge = mongoose.model("challenges");

exports.create = async (req, res) => {
  req.body.postedBy = req.user._id;
  const challenge = await new Challenge(req.body).save();
  res.json(challenge);
};
exports.findAllChallenges = async (req, res) => {
  const challenges = await Challenge.find({});
  res.json(challenges);
};
exports.auditChallenge = async (req, res) => {
  // Change audit field to true therefore it passed an admin check.
  const challenge = Challenge.findByIdAndUpdate(challengeId, (err, res) => {
    res.json(challenge);
  });
};
exports.deleteChallenge = async (req, res) => {
  dbChallenge.UserChallenge.findByIdAndDelete(challengeId, (err, res) => {
    if (err) return console.log(err);
  });
};

exports.getRandomChallenge = async (req, res) => {
  const randomChallenge = await Challenge.aggregate([{ $sample: { size: 1 } }]);
  res.json(randomChallenge);
};
// establishChallenge: function(challenge, cb) {
//   dbChallenge.RandomChallenge.findByIdAndDelete(challenge, (err, res) => {
//     if (err) console.log(err);
//     const { verb, noun } = res;
//     new dbChallenge.Challenge({ verb, noun }).save((err, result) => {
//       if (err) console.log(err);
//       cb(result);
//     });
//   });
// },
