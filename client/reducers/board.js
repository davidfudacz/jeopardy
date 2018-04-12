import axios from 'axios';
import socket from '../socket';
import { setGameNotPublished } from '../store';


const GET_BOARD_FROM_HOST = 'GET_BOARD_FROM_HOST';
const CLEAR_BOARD = 'CLEAR_BOARD';
const SET_CURRENT_QUESTION_ASKED = 'SET_CURRENT_QUESTION_ASKED';
const ADD_CATEGORY = 'ADD_CATEGORY';


//action creators
export const getBoardFromHost = (board) => ({
  type: GET_BOARD_FROM_HOST,
  board
})

export const clearBoard = () => ({
  type: CLEAR_BOARD
})

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  category,
})

export const setCurrentQuestionAsked = (questionId) => ({
  type: SET_CURRENT_QUESTION_ASKED,
  questionId
})


//thunks

export const clearBoardThunkerator = () => {
  return (dispatch) => {
    dispatch(clearBoard());
    dispatch(setGameNotPublished());
    socket.emit('boardCleared');
  }
}

export const questionAskedThunkerator = (questionId) => {
  return (dispatch) => {
    dispatch(setCurrentQuestionAsked(questionId));
    socket.emit('questionAsked', questionId);
  }
}

export const addCategoryThunkerator = (categoryId) => {
  return async (dispatch) => {
    try {
      const category = await axios.get(`/api/questions/addCategory/${categoryId}`)
      dispatch(addCategory(category.data));
    }
    catch (err) {
      console.log(err);
    }
  }
}


//reducer
export default (prevState = [], action) => {
  // helperFuncs
  const setQuestionAsAsked = (questionId) => {
    return prevState.map(category => {
      category.questions = category.questions.map(question => {
        if (question.id === questionId) question.asked = true;
        return question;
      })
      return category;
    })
  }

  switch (action.type) {
    case GET_BOARD_FROM_HOST:
      return action.board;

    case ADD_CATEGORY:
      return [...prevState, action.category];

    case SET_CURRENT_QUESTION_ASKED:
      return setQuestionAsAsked(action.questionId);

    case CLEAR_BOARD:
      return [];

    default: return prevState;
  }
}
