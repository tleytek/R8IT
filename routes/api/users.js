const router = require("express").Router();
const userController = require("../../controller/userController");

// Technique #1
router.get("/id", userController.getUserId);

module.exports = router;
