const express = require('express');
const router = express.Router();
const users = require('./users');
const questions = require('./questions');
const categories = require('./categories');



router.get('/', (req, res, next) => {
  res.sendStatus(200);
})
router.use('/users', users);
router.use('/questions', questions);
router.use('/categories', categories);


module.exports = router;