//actions
const INITIATE_TEAMS = 'INITIATE_TEAMS';

//action creators 
export const initiateTeams = (teams) => ({
  type: INITIATE_TEAMS,
  teams,
})

const initialState = [
  {
    id: 1,
    name: `Kevin's Team`
  },
  {
    id: 2,
    name: `Erika's Team`
  },
  {
    id: 3,
    name: `Ellen's Team`
  },
  {
    id: 4,
    name: `Ben's Team`
  }
]

//thunks

export default (prevState = initialState, action) => {
  switch (action.type) {
    case INITIATE_TEAMS:
      return action.teams;

    default: return prevState;
  }
}
