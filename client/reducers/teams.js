import socket from '../socket';

//actions
const ADD_TEAM = 'ADD_TEAM';
const RESET_TEAMS = 'RESET_TEAMS';
const GET_TEAMS_FROM_HOST = 'GET_TEAMS_FROM_HOST';

//action creators
export const addTeam = (team) => ({
  type: ADD_TEAM,
  team,
})

export const resetTeams = () => ({
  type: RESET_TEAMS,
})

export const getTeamsFromHost = (teams) => ({
  type: GET_TEAMS_FROM_HOST,
  teams,
})

//thunks
export const publishTeamsThunkerator = (teams) => {
  return (dispatch) => {
    socket.emit('publishTeams', teams);
  }
}

export default (prevState = [], action) => {
  switch (action.type) {

    case ADD_TEAM:
      return [...prevState, action.team];

    case GET_TEAMS_FROM_HOST:
      return action.teams;
    
    case RESET_TEAMS:
      return [];

    default: return prevState;
  }
}
