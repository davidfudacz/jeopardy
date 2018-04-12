import React from 'react';
import { connect } from 'react-redux';
import ChooseTeam from './ChooseTeam';
import store, { handleBuzzThunkerator } from '../store';

function Player(props) {
  const teamChosen = props.chosenTeam ? props.handleBuzz : () => {};

  return (
    
    <div onClick={teamChosen} data-team_id={props.chosenTeam} className={props.questionActive ? `playerPage active` : `playerPage`}>
    {
      props.gamePublished
        ? <ChooseTeam />
        : <div className="bigQuestion">Please wait for the host to initiate the game</div>
    }
      
    </div>
  )
}

const mapStateToProps = ({ teams, gamePublished, questionActive, chosenTeam }) =>
  ({ teams, gamePublished, questionActive, chosenTeam });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleBuzz: (event) => {
      event.preventDefault();
      const chosenTeamId = +event.target.dataset.team_id;
      store.dispatch(handleBuzzThunkerator(chosenTeamId));
    }
  }
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);
export default PlayerContainer;
