import { combineReducers } from 'redux';

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


export default combineReducers({
  activeTeam,
  board,
  currentQuestion,
  questionActive,
  currentQuestionLocation,
  queueOfTeamsToAnswer,
  score,
  teams,
  timer,
});
