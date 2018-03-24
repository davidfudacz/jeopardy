const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
var socketio = require('socket.io');


// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(1337, function () {
    console.log(`Listening on port 1337!`);
});
var io = socketio(server);


io.on('connection', function (socket) {
    /* This function receives the newly connected socket.
       This function will be called for EACH browser that connects to our server. */
    console.log('A new client has connected!');
    console.log(socket.id);
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