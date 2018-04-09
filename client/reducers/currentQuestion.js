import socket from '../socket';
import axios from 'axios';
import { setQuestionInactive } from '../store';

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

export const questionNotAnsweredThunkerator = (questionId) => {
  return async (dispatch) => {
    try {
      const updatedQuestion = await axios.put(`/api/questions/notAnswered/${questionId}`);
      console.log(updatedQuestion.data);
      dispatch(setQuestionInactive());
      dispatch(clearCurrentQuestion());
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
        console.log(curCategory[j].id, questionId)
        if (+curCategory[j].id === +questionId) {
          socket.emit('currentQuestion', curCategory[j])
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