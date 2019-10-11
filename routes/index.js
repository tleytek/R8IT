const path = require("path");
const router = require("express").Router();
//Sub-Routes
const apiRoutes = require("./api");
const authRoutes = require("./auth");

router.use("/api", apiRoutes);
router.use("/auth", authRoutes);

module.exports = router;
