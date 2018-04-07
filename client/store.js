import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import socket from './socket';
import rootReducer from './reducers';


const middleWareFuncs = applyMiddleware(loggerMiddleware, thunkMiddleware);

export * from './store/board';
export * from './store/activeTeam';
export * from './store/questionActive';
export * from './store/score';
export * from './store/teams';



//actions
const QUESTION_CLICKED = 'QUESTION_CLICKED';



const initialState = {
  currentQuestion: {},
  queueOfTeamsToAnswer: [],
  currentQuestionLocation: [],

}

//reducer
function reducer(prevState = initialState, action) {
  switch (action.type) {

    case QUESTION_CLICKED:
      return {...prevState,
        currentQuestion: action.question,
        currentQuestionLocation: action.currentQuestionLocation,
        questionActive: true
      }

    case QUESTION_ANSWERED_CORRECTLY:
      return Object.assign({}, prevState, {
        
      })

    case QUESTION_ANSWERED_INCORRECTLY:
      return Object.assign({}, prevState, {
        
      })

    case INCREMENT_SCORE:
      const activeTeamId = prevState.activeTeamId;
      const pointVal = +prevState.currentQuestion.pointVal;
      const score = prevState.score;
      const newScore = {...score, [activeTeamId]: (+score[activeTeamId] + pointVal) }
      return {...prevState,
        activeTeamId: action.activeTeamId
      }

    default: return prevState;
  }
}




//action creators
export function questionClicked (question, categoryId, questionId) {
  return {
    type: QUESTION_CLICKED,
    currentQuestionLocation: [categoryId, questionId],
    question
  }
}

export function questionAnsweredCorrectly (question) {
  return {
    type: QUESTION_ANSWERED_CORRECTLY,
    question
  }
}

export function questionAnsweredIncorrectly (question) {
  return {
    type: QUESTION_ANSWERED_INCORRECTLY,
    question
  }
}



//THUNKS

export function questionClickedThunkerator(questionId, categoryIndex, questionIndex) {
  return function thunk(dispatch) {
    return axios.get('/api/questions/'+ questionId)
    .then(res => res.data)
    .then(question => dispatch(questionClicked(question, categoryIndex, questionIndex)))
    .catch(console.error.bind(console));

  }
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleWareFuncs);
export default store;
