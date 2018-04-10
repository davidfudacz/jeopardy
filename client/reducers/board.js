import axios from 'axios';
import socket from '../socket';


const GET_BOARD_FROM_SERVER = 'GET_BOARD_FROM_SERVER';
const CLEAR_BOARD = 'CLEAR_BOARD';
const SET_CURRENT_QUESTION_ASKED = 'SET_CURRENT_QUESTION_ASKED';


//action creators
export const getBoardFromServer = (board) => ({
  type: GET_BOARD_FROM_SERVER,
  board
})

export const clearBoard = () => ({
  type: CLEAR_BOARD
})

export const setCurrentQuestionAsked = (questionId) => ({
  type: SET_CURRENT_QUESTION_ASKED,
  questionId
})


//thunks
export const buildBoardThunkerator = (numOfCategories) => {
  return async (dispatch) => {
    try {
      const boardResult = await axios.get('/api/questions/buildBoard/' + numOfCategories)
      dispatch(getBoardFromServer(boardResult.data))
      socket.emit('boardBuilt', boardResult.data);
      return boardResult.data;
    }
    catch (err) {
      console.log(err);
    }
  }
}

export const clearBoardThunkerator = () => {
  return (dispatch) => {
    dispatch(clearBoard());
    socket.emit('boardCleared');
  }
}

export const questionAskedThunkerator = (questionId) => {
  return (dispatch) => {
    dispatch(setCurrentQuestionAsked(questionId));
    socket.emit('questionAsked', questionId);
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
    case GET_BOARD_FROM_SERVER:
      return action.board;

    case SET_CURRENT_QUESTION_ASKED:
      return setQuestionAsAsked(action.questionId);

    case CLEAR_BOARD:
      return [];

    default: return prevState;
  }
}
