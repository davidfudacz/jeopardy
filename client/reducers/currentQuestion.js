import socket from '../socket';
import axios from 'axios';
import { questionAskedThunkerator, setQuestionInactiveThunkerator } from '../store';

//actions
const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
const CLEAR_CURRENT_QUESTION = 'CLEAR_CURRENT_QUESTION';

//action creators

export const setCurrentQuestion = (question) => ({
  type: SET_CURRENT_QUESTION,
  question,
})

export const clearCurrentQuestion = () => ({
  type: CLEAR_CURRENT_QUESTION,
})


//thunks
export const questionNotAnsweredThunkerator = (questionId) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/questions/notAnswered/${questionId}`);
      dispatch(setQuestionInactiveThunkerator());
      dispatch(clearCurrentQuestion());
      dispatch(questionAskedThunkerator(questionId));
    }
    catch (err) {
      console.log(err);
    }
  }
}

export const questionAnsweredIncorrectlyThunkerator = async (question) => {
  try {
    await axios.put(`/answered/incorrectly/${question.id}`)
  }
  catch (err) {
    console.log(err);
  }
}

export const questionAnsweredCorrectlyThunkerator = async (question) => {
  try {
    await axios.put(`/answered/correctly/${question.id}`)
  }
  catch (err) {
    console.log(err);
  }
}

export const findAndSetCurrentQuestionThunkerator = (board, questionId) => {
  return (dispatch) => {
    for (let i = 0; i < board.length; i++) {
      let curCategory = board[i].questions;
      for (let j = 0; j < curCategory.length; j++) {
        if (+curCategory[j].id === +questionId) {
          socket.emit('setCurrentQuestion', curCategory[j])
          return dispatch(setCurrentQuestion(curCategory[j]));
        }
      }
    }
  }
}


//reducer
export default (prevState = {}, action) => {
  switch (action.type) {

    case SET_CURRENT_QUESTION:
      return action.question;

    case CLEAR_CURRENT_QUESTION:
      return {};

    default: return prevState;
  }
}