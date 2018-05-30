
//actions
const ACTIVATE_TEAM = 'ACTIVATE_TEAM';
const DEACTIVATE_TEAM = 'DEACTIVATE_TEAM';

//action creators

export const changeActiveTeam = (activeTeamId) =>  ({
  type: ACTIVATE_TEAM,
  activeTeamId
})

export const deactivateTeam = () =>  ({
  type: ACTIVATE_TEAM,
})

//reducer
export default (prevState = 0, action) => {
  switch (action.type) {

    case ACTIVATE_TEAM:
      return action.activeTeamId;

    case DEACTIVATE_TEAM:
      return {};

    default: return prevState;
  }
}
