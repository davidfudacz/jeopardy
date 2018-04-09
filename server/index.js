const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();



app.use(morgan('dev'));
//static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./routes/api')); // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});


module.exports = app;
