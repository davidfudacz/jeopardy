import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import socket from './socket';

const middleWareFuncs = applyMiddleware(loggerMiddleware, thunkMiddleware);

//actions
const BOARD_BUILT = 'BOARD_BUILT';
const QUESTION_CLICKED = 'QUESTION_CLICKED';
const QUESTION_ANSWERED_CORRECTLY = 'QUESTION_ANSWERED_CORRECTLY';
const QUESTION_ANSWERED_INCORRECTLY = 'QUESTION_ANSWERED_INCORRECTLY';



const initialState = {
  board: [],
  currentQuestion: {},
  currentQuestionLocation: [],
  questionActive: false,
  score: {
    1: 0,
    2: 0,
    3: 0,
    4: 0
  },
  teams: [
    {
      id: 1,
      name: 'Kevins Team'
    },
    {
      id: 2,
      name: 'Erikas Team'
    },
    {
      id: 3,
      name: 'Ellens Team'
    },
    {
      id: 4,
      name: 'Bens Team'
    }
  ],

}

//reducer
function reducer(prevState = initialState, action) {
  switch (action.type) {
    case BOARD_BUILT:
      return Object.assign({}, prevState, { board: action.board })

    case QUESTION_CLICKED:
      return Object.assign({}, prevState, {
        currentQuestion: action.question,
        currentQuestionLocation: action.currentQuestionLocation,
        questionActive: true
      })

    default: return prevState;
  }
}




//action creators
export function boardBuilt (board) {
  return {
    type: BOARD_BUILT,
    board
  }
}

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



//THUNKS
export function buildBoard(categoryNum) {
  return function thunk(dispatch) {
    return axios.get('/api/questions/buildBoard/' + categoryNum)
    .then(res => res.data)
    .then(board => dispatch(boardBuilt(board)))
    .catch(console.error.bind(console));

  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleWareFuncs);
export default store;
