'use strict'
const Sequelize = require('sequelize');
const db = require('./db');

const Question = db.define('question', {
  question: {
    type: Sequelize.TEXT,
  },

  guessedRight: {
    type: Sequelize.INTEGER
  },

  guessedWrong: {
    type: Sequelize.INTEGER
  },

  initialDifficulty: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 4,
    }
  },

  cohortWeek: {
    type: Sequelize.INTEGER
  },

  totalGuesses: {
    type: Sequelize.VIRTUAL,
    get () {
      let right = this.getDataValue('guessedRight');
      let wrong = this.getDataValue('guessedWrong');
      return right + wrong;
    }
  },

  pointValue: {
    type: Sequelize.VIRTUAL,
    get() {
      let wrong = this.getDataValue('guessedWrong');
      let total = this.getDataValue('totalGuesses');
      let initialDifficulty = this.getDataValue('initialDifficulty');
      if ((total) < 10) return (initialDifficulty + 1) * 100;
      return Math.ceil((wrong / (total)) * 4) * 100;
    }
  }

})

module.exports = Question;