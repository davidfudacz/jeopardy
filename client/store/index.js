import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import activeTeam from './activeTeam';
import board from './board';
import currentQuestion from './currentQuestion';
import currentQuestionLocation from './currentQuestionLocation';
import questionActive from './questionActive';
import queueOfTeamsToAnswer from './queueOfTeamsToAnswer';
import score from './score';
import teams from './teams';
import timer from './timer';
import isHost from './isHost';
import gamePublished from './gamePublished';
import chosenTeam from './chosenTeam';

const rootReducer = combineReducers({
  activeTeam,
  board,
  currentQuestion,
  questionActive,
  currentQuestionLocation,
  queueOfTeamsToAnswer,
  score,
  teams,
  timer,
  isHost,
  gamePublished,
  chosenTeam,
});
const middleWareFuncs = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: false})
))
const store = createStore(rootReducer, middleWareFuncs)

export * from './board';
export * from './activeTeam';
export * from './questionActive';
export * from './score';
export * from './teams';
export * from './currentQuestion';
export * from './timer';
export * from './isHost';
export * from './gamePublished';
export * from './queueOfTeamsToAnswer';
export * from './chosenTeam';
export default store;
