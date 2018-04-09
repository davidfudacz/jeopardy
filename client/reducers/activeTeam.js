
//actions
const CHANGE_ACTIVE_TEAM = 'CHANGE_ACTIVE_TEAM';
const DEACTIVATE_TEAM = 'DEACTIVATE_TEAM';

//action creators

export const changeActiveTeam = (activeTeamId) =>  ({
  type: CHANGE_ACTIVE_TEAM,
  activeTeamId
})

export const deactivateTeam = () =>  ({
  type: CHANGE_ACTIVE_TEAM,
})



//reducer
export default (prevState = 0, action) => {
  switch (action.type) {

    case CHANGE_ACTIVE_TEAM:
      return action.activeTeamId;

    case DEACTIVATE_TEAM:
      return {};

    default: return prevState;
  }
}
