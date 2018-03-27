const express = require('express');
const router = express.Router();
const users = require('./users');
const questions = require('./questions');



router.get('/', (req, res, next) => {
  res.sendStatus(200);
})
router.use('/users', users);
router.use('/questions', questions);


module.exports = router;