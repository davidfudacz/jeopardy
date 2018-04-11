//actions
const ADD_TEAM = 'ADD_TEAM';
const RESET_TEAMS = 'RESET_TEAMS';

//action creators 
export const addTeam = (team) => ({
  type: ADD_TEAM,
  team,
})
export const resetTeams = () => ({
  type: RESET_TEAMS,
})

const initialState = [];



//thunks

export default (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return [...prevState, action.team];
    
    case RESET_TEAMS:
      return [];

    default: return prevState;
  }
}
