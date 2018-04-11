'use strict'
const db = require('./db');

const User = require('./user');
const Question = require('./question');
const Category = require('./category');
const Cohort = require('./cohort');
const UserCohort = require('./userCohort');

Question.belongsTo(Category);

// User.belongsTo(Cohort, {as: 'student'});
User.belongsToMany(Cohort, {through: 'cohortFellows', as: 'fellow'});
User.belongsToMany(Cohort, {through: 'cohortStudents', as: 'student'});
User.belongsToMany(Cohort, {through: 'cohortInstructors', as: 'instructor'});
Cohort.belongsToMany(User, {through: 'cohortStudents', as: 'students'});
Cohort.belongsToMany(User, {through: 'cohortInstructors', as: 'instructors'});
Cohort.belongsToMany(User, {through: 'cohortFellows', as: 'fellows'});

module.exports = {
  User,
  Question,
  Category,
  Cohort,
  UserCohort,
  db
}
