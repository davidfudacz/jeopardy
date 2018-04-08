'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './reactComponents';
import { Provider } from 'react-redux';
import store, { getBoardFromServer, clearBoard } from './store';
import socket from './socket';


ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>,
  document.getElementById('app')
);

socket.on('boardBuilt', (board) => {
  store.dispatch(getBoardFromServer(board));
})

socket.on('boardCleared', () => {
  store.dispatch(clearBoard());
})