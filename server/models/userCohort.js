'use strict'
const Sequelize = require('sequelize');
const db = require('./db');

const UserCohort = db.define('userCohort', {
  userId: {
    type: Sequelize.INTEGER
  },
  cohortId: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.ENUM('Student','Fellow','Instructor')
  },
})

module.exports = UserCohort;