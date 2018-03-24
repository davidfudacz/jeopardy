const path = require('path');
const express = require('express');
const app = express();
var socketio = require('socket.io');


// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
const server = app.listen(1337, function () {
    console.log(`Listening on port 1337!`);
});
var io = socketio(server);

const users = {};

io.on('connection', function (socket) {
    /* This function receives the newly connected socket.
       This function will be called for EACH browser that connects to our server. */
    console.log('A new client has connected!');
    console.log(socket.id);

    socket.on('draw', (start, end, color) => {
        console.log(start, end, color);
        socket.broadcast.emit('draw', start, end, color);
    })


    socket.on('disconnect', () => {

        console.log(":(", socket.id);
    })
});




app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});