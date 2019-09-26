const router = require("express").Router();

const googleAuth = require("./google");

router.use("/google", googleAuth);
//local
//facebook
//github
//etc
module.exports = router;
