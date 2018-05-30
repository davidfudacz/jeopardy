'use strict'
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/jeopardy', {logging: false});

module.exports = db
