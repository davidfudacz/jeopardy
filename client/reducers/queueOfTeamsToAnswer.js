import socket from '../socket';

//actions
const ENQUEUE_TEAM = 'ENQUEUE_TEAM';
const RESET_QUEUE = 'RESET_QUEUE';
const DEQUEUE_TEAM = 'DEQUEUE_TEAM';

//action creators
export const enqueueTeam = (teamId) => ({
  type: ENQUEUE_TEAM,
  teamId,
})

export const resetQueue = () => ({
  type: RESET_QUEUE,
})

export const dequeueTeam = () => ({
  type: DEQUEUE_TEAM,
})

//thunks
export const handleBuzzThunkerator = (teamId) => {
  return (dispatch) => {
    socket.emit('teamBuzzed', teamId);
  }
}

export default (prevState = [], action) => {
  //helper Func
  const updateQueue = (teamId) => {
    if (prevState.indexOf(teamId) > -1) {
      return prevState;
    }
    else {
      return [...prevState, action.teamId];
    }
  }

  switch (action.type) {

    case ENQUEUE_TEAM:
      return updateQueue(action.teamId);
    
      case RESET_QUEUE:
        return [];
    
      case DEQUEUE_TEAM:
        return prevState.slice(1);

    default: return prevState;
  }
}
