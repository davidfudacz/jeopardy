'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'



var socket = io();


socket.on('connect', function () {
  console.log('I have made a persistent two-way connection to the server!');

});


const questions = document.getElementsByClassName('question');
console.log(Array.prototype.slice.call(questions));
// Array.prototype.slice.call(questions).forEach(question => {
//   console.log(question);
//   // question.setAttribute('background-color','red');
//   // question.addEventListener('click', (question) => {
//   //   socket.emit('questionClicked', question);
//   // })
// });


console.log('Hello React');


ReactDOM.render(<Main />, document.getElementById('app'))

