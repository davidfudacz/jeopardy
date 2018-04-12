'use strict';

const { db } = require('./server/models')
const app = require('./server')
const PORT = 3000;
const seedFile = require('./server/seed');
const socketio = require('socket.io');



// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen

db.sync({ force: true })
  .then(()=> seedFile())
  .then(function () {
    console.log('All tables created!');
  })
  .catch(console.error.bind(console));


const server = app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`);
});
const io = socketio(server);


io.on('connection', function (socket) {
    /* This function receives the newly connected socket.
       This function will be called for EACH browser that connects to our server. */
    console.log('A new client has connected!');
    console.log(socket.id);

    socket.on('publishGame', (board) => {
      socket.broadcast.emit('publishGame', board)
    })

    socket.on('publishTeams', (teams) => {
      socket.broadcast.emit('publishTeams', teams)
    })

    socket.on('teamBuzzed', (teamId) => {
      socket.broadcast.emit('teamBuzzed', teamId)
    })

    socket.on('publishScore', (score) => {
      socket.broadcast.emit('publishScore', score)
    })

    socket.on('boardCleared', () => {
      socket.broadcast.emit('boardCleared')
    })

    socket.on('setCurrentQuestion', (question) => {
      socket.broadcast.emit('setCurrentQuestion', question);
    })

    socket.on('questionAsked', (questionId) => {
      socket.broadcast.emit('questionAsked', questionId);
    })

    socket.on('questionActive', () => {
      socket.broadcast.emit('questionActive');
    })

    socket.on('questionInactive', () => {
      socket.broadcast.emit('questionInactive');
    })

    socket.on('disconnect', () => {
        console.log(":(", socket.id);
    })
});

