
//actions
const SET_TEAM = 'SET_TEAM';
const CLEAR_TEAM = 'CLEAR_TEAM';

//action creators

export const setChosenTeam = (teamId) => ({
  type: SET_TEAM,
  teamId,
})

export const clearChosenTeam = () => ({
  type: CLEAR_TEAM,
})

//reducer
export default (prevState = 0, action) => {
  switch (action.type) {

    case SET_TEAM:
      return action.teamId;

    case CLEAR_TEAM:
      return {};

    default: return prevState;
  }
}
