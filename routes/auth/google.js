const router = require("express").Router();
const passport = require("passport");
const googleController = require("../../controller/googleController");

router.route("/login").get(googleController.login);
router.route("/logout").get(googleController.logout);
router.route("/callback").get(googleController.callback);

module.exports = router;
