import socket from '../socket';


//actions
const SET_QUESTION_ACTIVE = 'SET_QUESTION_ACTIVE';
const SET_QUESTION_INACTIVE = 'SET_QUESTION_INACTIVE';

//action creators

export const setQuestionActive = () => ({
  type: SET_QUESTION_ACTIVE,
})

export const setQuestionInactive = () => ({
  type: SET_QUESTION_INACTIVE,
})

export const setQuestionActiveThunkerator = () => {
  return (dispatch) => {
    dispatch(setQuestionActive());
    socket.emit('questionActive');
  }
}

export const setQuestionInactiveThunkerator = () => {
  return (dispatch) => {
    dispatch(setQuestionInactive());
    socket.emit('questionInactive');
  }
}


//reducer
export default (prevState = false, action) => {
  switch (action.type) {

    case SET_QUESTION_ACTIVE:
      return true;

    case SET_QUESTION_INACTIVE:
      return false;

    default: return prevState;
  }
}