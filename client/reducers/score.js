import axios from 'axios';
import { } from '../store';


//actions
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const DECREMENT_SCORE = 'DECREMENT_SCORE';
const CREATE_SCORE = 'CREATE_SCORE';

//action creators
export const createScore = (teamId) => ({
  type: CREATE_SCORE,
  teamId,
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

export default (prevState = {}, action) => {

  switch (action.type) {

    case CREATE_SCORE:
      return { ...prevState, [action.teamId]: 0 };

    case INCREMENT_SCORE:
      return { ...prevState, [action.activeTeamId]: prevState[action.activeTeamId] + action.pointVal };

    case DECREMENT_SCORE:
      return { ...prevState, [action.activeTeamId]: prevState[action.activeTeamId] - action.pointVal };

    default: return prevState;
  }
}