const express = require('express');
const router = express.Router();
const path = require('path');
const api = require('./api')


router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
router.get('/board', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../../client/board.html'));
});
router.use('/api', api);


module.exports = router;