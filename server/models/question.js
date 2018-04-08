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

  guessedRight: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  guessedWrong: {
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
      let right = this.getDataValue('guessedRight');
      let wrong = this.getDataValue('guessedWrong');

      return right + wrong;
    }
  },

  pointValue: {
    type: Sequelize.VIRTUAL,
    get: function () {
      let right = this.getDataValue('guessedRight');
      let wrong = this.getDataValue('guessedWrong');
      let total = right + wrong;
      let initialDifficulty = this.getDataValue('initialDifficulty');
      if ((total) < 10) return (initialDifficulty + 1) * 100;
      return Math.ceil((wrong / (total)) * 4) * 100;
    }
  }


})

module.exports = Question;