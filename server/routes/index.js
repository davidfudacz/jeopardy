const express = require('express');
const router = express.Router();
const path = require('path');
const apiRoutes = require('./apiRoutes')


console.log('in routes index');
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});
router.get('/board', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/board.html'));
});
router.get('/api', apiRoutes);


module.exports = router;