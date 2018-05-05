import React from 'react';
import { connect } from 'react-redux';
import store, { setChosenTeam } from '../store';

function ChooseTeam(props) {
  const displaySelect = !props.chosenTeam;
  return (
    <div className="teamSelect">
      {
        displaySelect
          ? <form onSubmit={props.handleTeamSubmit}>
            <select id="teamChoice">
              {
                props.teams.map(team => <option value={team.fellowId} key={`team${team.fellowId}`}>{team.teamName}</option>)
              }
            </select><button type="submit">Select</button>
          </form>
          : <div className="instructions">Wait until the screen is green, then click anywhere to buzz in</div>
      }
    </div>
  )
}

const mapStateToProps = ({ teams, chosenTeam }) => ({ teams, chosenTeam });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleTeamSubmit: (event) => {
      event.preventDefault();
      store.dispatch(setChosenTeam(+event.target.teamChoice.value));
      // console.log(+event.target.teamChoice.value)
    }
  }
}

const ChooseTeamContainer = connect(mapStateToProps, mapDispatchToProps)(ChooseTeam);
export default ChooseTeamContainer;
