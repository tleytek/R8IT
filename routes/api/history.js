const router = require('express').Router();
const historyController = require('../../controller/historyController');

//Technique #1
router.get('/recordHistory', historyController.recordHistory);

// Technique #2
// router.route('/recordHistory').get(historyController.recordHistory);

module.exports = router;
