'use strict'
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/jeopardy');

module.exports = db;