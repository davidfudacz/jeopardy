'use strict'
const Sequelize = require('sequelize');
const db = require('./db');

const UserCohort = db.define('userCohorts', {
  userType: {
    type: Sequelize.ENUM('Student','Fellow','Instructor')
  }
})

module.exports = UserCohort;