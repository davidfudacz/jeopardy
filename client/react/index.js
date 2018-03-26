'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'



export const socket = io();


socket.on('connect', function () {
  console.log('I have made a persistent two-way connection to the server!');

});


console.log('Hello React');


ReactDOM.render(<Main />, document.getElementById('app'))


