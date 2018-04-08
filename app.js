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

    socket.on('questionClicked', (question) => {
      io.emit('displayQuestion', question);
      console.log('Points:', question.pointVal);
      console.log('Question:', question.question);
    });

    socket.on('disconnect', () => {

        console.log(":(", socket.id);
    })
});

