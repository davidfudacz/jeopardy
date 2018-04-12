import axios from 'axios';
import socket from '../socket';


//actions
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const DECREMENT_SCORE = 'DECREMENT_SCORE';
const CREATE_SCORE = 'CREATE_SCORE';
const GET_SCORE_FROM_HOST = 'GET_SCORE_FROM_HOST';

//action creators
export const createScore = (teamId) => ({
  type: CREATE_SCORE,
  teamId,
})

export const getScoreFromHost = (score) => ({
  type: GET_SCORE_FROM_HOST,
  score,
})


export const incrementScore = (activeTeamId, pointVal) => ({
  type: INCREMENT_SCORE,
  activeTeamId,
  pointVal
})


export const decrementScore = (activeTeamId, pointVal) => ({
  type: DECREMENT_SCORE,
  activeTeamId,
  pointVal
})


//thunks 
export const publishScoreThunkerator = (score) => {
  return (dispatch) => {
    socket.emit('publishScore', score);
  }
}


export default (prevState = {}, action) => {

  switch (action.type) {

    case CREATE_SCORE:
      return { ...prevState, [action.teamId]: 0 };

    case GET_SCORE_FROM_HOST:
      return action.score;

    case INCREMENT_SCORE:
      return { ...prevState, [action.activeTeamId]: prevState[action.activeTeamId] + action.pointVal };

    case DECREMENT_SCORE:
      return { ...prevState, [action.activeTeamId]: prevState[action.activeTeamId] - action.pointVal };

    default: return prevState;
  }
}