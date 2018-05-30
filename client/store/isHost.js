
//actions
const SET_HOST = 'SET_HOST';
const CLEAR_HOST = 'CLEAR_HOST';

//action creators

export const setHost = () => ({
  type: SET_HOST,
})

export const clearHost = () => ({
  type: CLEAR_HOST,
})


//reducer
export default (prevState = false, action) => {
  switch (action.type) {

    case SET_HOST:
      return true;

    case CLEAR_HOST:
      return false;

    default: return prevState;
  }
}