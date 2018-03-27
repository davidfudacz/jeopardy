'use strict'
const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  //   allowNull: false,
  // },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstLast: {
    type: Sequelize.VIRTUAL,
    get () {
      let first = this.getDataValue('firstName');
      let last = this.getDataValue('lastName');
      return `${first} ${last}`;
    }
  },
  lastFirst: {
    type: Sequelize.VIRTUAL,
    get () {
      let first = this.getDataValue('firstName');
      let last = this.getDataValue('lastName');
      return `${last}, ${first}`;
    }
  },

})

module.exports = User;
