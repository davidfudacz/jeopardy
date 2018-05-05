const express = require('express');
const router = express.Router();
const { Question, Category } = require('../../models');

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.json(allCategories);
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;