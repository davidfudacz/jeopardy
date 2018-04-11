'use strict'
const Sequelize = require('sequelize');
const db = require('./db');
const Category = require('./category')

const Question = db.define('question', {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  answer: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  answeredCorrectly: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  answeredIncorrectly: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  notAnswered: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  initialDifficulty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 4,
    }
  },

  cohortWeek: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  totalGuesses: {
    type: Sequelize.VIRTUAL,
    get: function () {
      let right = this.getDataValue('answeredCorrectly');
      let wrong = this.getDataValue('answeredIncorrectly');
      let notAnswered = this.getDataValue('notAnswered');

      return right + wrong + notAnswered;
    }
  },

  pointValue: {
    type: Sequelize.VIRTUAL,
    get: function () {
      let right = this.getDataValue('answeredCorrectly');
      let wrong = this.getDataValue('answeredIncorrectly');
      let notAnswered = this.getDataValue('notAnswered');
      let total = right + wrong + notAnswered;
      let initialDifficulty = this.getDataValue('initialDifficulty');
      if ((total) < 10) return (initialDifficulty + 1) * 100;
      return Math.ceil((wrong + notAnswered / (total)) * 4) * 100;
    }
  }


})

module.exports = Question;