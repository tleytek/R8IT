const router = require("express").Router();
const challenge = require("./challenges");
const posts = require("./posts");
const users = require("./users");
const battle = require("./battle");

// Technique #2
router.use("/challenges", challenge);
router.use("/posts", posts);
router.use("/users", users);
router.use("/battle", battle);

module.exports = router;
