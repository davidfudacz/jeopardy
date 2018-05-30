'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components';
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
    getTeamsFromHost,
    setGameNotPublished,
    enqueueTeam,
    dequeueTeam,
    decrementScore,
    incrementScore,
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

socket.on('teamBuzzed', (teamId) => {
  store.dispatch(enqueueTeam(teamId));
});

socket.on('decrementScore', (teamId, pointValue) => {
  store.dispatch(decrementScore(teamId, pointValue));
});

socket.on('incrementScore', (teamId, pointValue) => {
  store.dispatch(incrementScore(teamId, pointValue));
});

socket.on('dequeueTeam', () => {
  store.dispatch(dequeueTeam());
});

socket.on('publishScore', (score) => {
  store.dispatch(getScoreFromHost(score));
});

socket.on('boardCleared', () => {
  store.dispatch(clearBoard());
  store.dispatch(setQuestionInactive());
  store.dispatch(clearCurrentQuestion());
  store.dispatch(setGameNotPublished());
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
