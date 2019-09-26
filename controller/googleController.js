const passport = require("passport");

//Figure out why this works in NEXTJS tutorial
exports.login = (req, res, next) => {
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })(req, res, next);
};

exports.callback = (req, res, next) => {
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/test"
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
