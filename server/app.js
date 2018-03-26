const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const socketio = require('socket.io');
const { db } = require('./models');
const Sequelize = require('sequelize');


// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen

db.sync({ force: true })
  .then(function () {
    console.log('All tables created!');
  })
  .catch(console.error.bind(console));



const server = app.listen(3000, function () {
    console.log(`Listening on port 3000!`);
});
const io = socketio(server);


io.on('connection', function (socket) {
    /* This function receives the newly connected socket.
       This function will be called for EACH browser that connects to our server. */
    console.log('A new client has connected!');
    console.log(socket.id);

    socket.on('questionClicked', (question) => {
      io.emit('displayQuestion',question);
      console.log('Points:',question.pointVal);
      console.log('Question:',question.question);
    });

    socket.on('disconnect', () => {

        console.log(":(", socket.id);
    })
});




app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(require('./routes'));

// Error catching endware.
app.use(function (err, req, res, next) {
  console.error(err, typeof next);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});