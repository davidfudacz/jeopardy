'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './reactComponents';
import { Provider } from 'react-redux';
import socket from './socket';
import store,
  { getBoardFromServer,
    clearBoard,
    setCurrentQuestion,
    setQuestionActive,
    setQuestionInactive,
    
    clearCurrentQuestion
  } from './store';


ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>,
  document.getElementById('app')
);

socket.on('boardBuilt', (board) => {
  store.dispatch(getBoardFromServer(board));
});

socket.on('boardCleared', () => {
  store.dispatch(clearBoard());
  store.dispatch(setQuestionInactive());
  store.dispatch(clearCurrentQuestion());
});

socket.on('currentQuestion', (question) => {
  store.dispatch(setCurrentQuestion(question));
  store.dispatch(setQuestionActive());
});