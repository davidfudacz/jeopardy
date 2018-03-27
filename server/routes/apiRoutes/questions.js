const express = require('express');
const router = express.Router();
const { Question, Category } = require('../../models');


router.get('/', function (req, res) {
  Question.findAll({ include: Category })
  .then((questions) => {
    res.json(questions);
  })
  .catch(console.error.bind(console));
});


module.exports = router;