const router = require('express').Router();
const challenge = require('./challenges');
const history = require('./history');
const posts = require('./posts');
const users = require('./users');

// Technique #2
router.use('/challenges', challenge);
router.use('/history', history);
router.use('/posts', posts);
router.use('/users', users);

module.exports = router;
