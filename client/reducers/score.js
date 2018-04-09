import axios from 'axios';
import { } from '../store';


//actions
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const DECREMENT_SCORE = 'DECREMENT_SCORE';
const CREATE_SCORE = 'CREATE_SCORE';

//helperFuncs
const createScoreObj = (numOfTeams) => {
  let output = {};
  for (let i = 0; i < numOfTeams; i++) {
    output[i + 1] = 0;
  }
  return output;
}

//action creators
export const createScore = (numOfTeams) => ({
  type: INCREMENT_SCORE,
  scoreObj: createScoreObj(numOfTeams),
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
// export const questionAnsweredCorrectlyThunkerator = (questionId, activeTeam, pointVal) => {
//   return async (dispatch) => {
//     try {
//       await axios.put(`/api/questions/guessed/correctly/${questionId}`)
//       dispatch(incrementScore(activeTeam, pointVal));
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
// }

// export const questionAnsweredIncorrectlyThunkerator = (questionId, activeTeamId, pointVal) => {
//   return async (dispatch) => {
//     try {
//       await axios.put(`/api/questions/guessed/incorrectly/${questionId}`)
//       dispatch(decrementScore(activeTeamId, pointVal));
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
// }

export default (prevState = {}, action) => {

  switch (action.type) {

    case CREATE_SCORE:
      return action.scoreObj;

    case INCREMENT_SCORE:
      return { ...prevState, [action.activeTeamId]: prevState[action.activeTeamId] + action.pointVal };

    case DECREMENT_SCORE:
      return { ...prevState, [action.activeTeamId]: prevState[action.activeTeamId] - action.pointVal };

    default: return prevState;
  }
}