
// io is declared in the script tag in index.html
export const socket = io();


socket.on('connect', function () {
  console.log('I have made a persistent two-way connection to the server!');

});

