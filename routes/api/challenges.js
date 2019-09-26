const router = require('express').Router();
const challengeController = require('../../controller/challengeController');

router.get('/', challengeController.findAllChallenges);
router.post('/create', challengeController.create);

module.exports = router;
