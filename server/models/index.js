'use strict'
const Sequelize = require('sequelize');
const db = require('./db');

const User = require('./user');
const Question = require('./question');
const Category = require('./category');
const Cohort = require('./cohort');
const UserCohort = require('./userCohort');

Question.belongsTo(Category);
Cohort.belongsToMany(User, {through: 'userCohorts'});
User.belongsToMany(Cohort, {through: 'userCohorts'});

module.exports = {
  User,
  Question,
  Category,
  Cohort,
  UserCohort,
  db
}