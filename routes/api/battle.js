const router = require("express").Router();
const battleController = require("../../controller/battleController");

router.get("/prepare-battle", battleController.prepareBattle);
router.post("/save-result", battleController.saveResult);

module.exports = router;
