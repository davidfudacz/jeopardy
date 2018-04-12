'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './reactComponents';
import { Provider } from 'react-redux';
import socket from './socket';
import store,
  { getBoardFromHost,
    getScoreFromHost,
    clearBoard,
    setCurrentQuestion,
    setQuestionActive,
    setQuestionInactive,
    clearCurrentQuestion,
    setCurrentQuestionAsked,
    setGamePublished,
    getTeamsFromHost
  } from './store';


ReactDOM.render(
  <Provider store={store} >
    <Main />
  </Provider>,
  document.getElementById('app')
);

socket.on('publishGame', (board) => {
  store.dispatch(getBoardFromHost(board));
  store.dispatch(setGamePublished());
});

socket.on('publishTeams', (teams) => {
  store.dispatch(getTeamsFromHost(teams));
});

socket.on('publishScore', (score) => {
  store.dispatch(getScoreFromHost(score));
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
