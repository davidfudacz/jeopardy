const express = require('express');
const router = express.Router();
const { User, Cohort, UserCohort } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



router.get('/', function (req, res) {
  res.send('hello there');
});

router.get('/fellows/:cohortId', async (req, res, next) => {
  try {
    const cohort = await Cohort.findById(req.params.cohortId)
    const fellows = await cohort.getFellows();
    res.json(fellows);
  }
  catch (err) {
    console.log(err);
  }
})

router.get('/cohorts', async (req, res, next) => {
  try {
    const cohorts = await Cohort.findAll();
    res.json(cohorts);
  }
  catch (err) {
    console.log(err);
  }
})


module.exports = router;
