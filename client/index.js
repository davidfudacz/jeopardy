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
    clearCurrentQuestion,
    setCurrentQuestionAsked
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

socket.on('setCurrentQuestion', (question) => {
  store.dispatch(setCurrentQuestion(question));
});

socket.on('questionActive', () => {
  store.dispatch(setQuestionActive());
});

socket.on('questionInactive', () => {
  store.dispatch(setQuestionInactive());
});

socket.on('questionAsked', (questionId) => {
  store.dispatch(setCurrentQuestionAsked(questionId));
  store.dispatch(setQuestionInactive());
  store.dispatch(clearCurrentQuestion());
});
