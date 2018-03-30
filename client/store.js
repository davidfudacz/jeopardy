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
const CHANGE_ACTIVE_TEAM = 'CHANGE_ACTIVE_TEAM';
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const DECREMENT_SCORE = 'DECREMENT_SCORE';



const initialState = {
  board: [],
  currentQuestion: {},
  activeTeamId: 0,
  queueOfTeamsToAnswer: [],
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
      return {...prevState, board: action.board }

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

    case CHANGE_ACTIVE_TEAM:
      return {...prevState,
        activeTeamId: action.activeTeamId
      }

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

export function questionAnsweredIncorrectly (question) {
  return {
    type: QUESTION_ANSWERED_INCORRECTLY,
    question
  }
}

export function changeActiveTeam (activeTeamId) {
  return {
    type: CHANGE_ACTIVE_TEAM,
    activeTeamId
  }
}

export function incrementScore (activeTeamId, pointVal) {
  return {
    type: INCREMENT_SCORE,
    activeTeamId,
    pointVal
  }
}

export function decrementScore (activeTeamId, pointVal) {
  return {
    type: DECREMENT_SCORE,
    activeTeamId,
    pointVal
  }
}



//THUNKS
export function buildBoardThunkerator(categoryNum) {
  return function thunk(dispatch) {
    return axios.get('/api/questions/buildBoard/' + categoryNum)
    .then(res => res.data)
    .then(board => dispatch(boardBuilt(board)))
    .catch(console.error.bind(console));

  }
}

export function questionClickedThunkerator(questionId, categoryIndex, questionIndex) {
  return function thunk(dispatch) {
    return axios.get('/api/questions/'+ questionId)
    .then(res => res.data)
    .then(question => dispatch(questionClicked(question, categoryIndex, questionIndex)))
    .catch(console.error.bind(console));

  }
}

export function incorrectQuestionThunkerator(question) {

}


export function correctQuestionThunkerator(question) {

}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleWareFuncs);
export default store;
