import socket from '../socket';

//actions
const SET_GAME_PUBLISHED = 'SET_GAME_PUBLISHED';
const SET_GAME_NOT_PUBLISHED = 'SET_GAME_NOT_PUBLISHED';

//action creators

export const setGamePublished = () => ({
  type: SET_GAME_PUBLISHED,
})

export const setGameNotPublished = () => ({
  type: SET_GAME_NOT_PUBLISHED,
})

//thunks
export const publishGameThunkerator = (board) => {
  return (dispatch) => {
      dispatch(setGamePublished());
      socket.emit('publishGame', board);
  }
}

//reducer
export default (prevState = false, action) => {
  switch (action.type) {

    case SET_GAME_PUBLISHED:
      return true;

    case SET_GAME_NOT_PUBLISHED:
      return false;

    default: return prevState;
  }
}