const express = require('express');
const router = express.Router();
const users = require('./users');
const questions = require('./questions');



console.log('in api routes index');
router.get('/users', users);
router.get('/questions', questions);


module.exports = router;