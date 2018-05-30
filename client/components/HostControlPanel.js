import React from 'react';
import { connect } from 'react-redux';
import {
  clearBoardThunkerator,
  setQuestionInactive,
  clearCurrentQuestion,
  publishGameThunkerator,
  publishTeamsThunkerator,
  publishScoreThunkerator
} from '../store';
import BuildGame from './BuildGame';

function HostControlPanel(props) {
  return (
    <div className="hostControlPanel">
    <BuildGame />
    {
      props.gamePublished
        ? <div className="hostPanelItem button" onClick={props.clearBoard}>Cancel Game</div>
        : <div className="hostPanelItem button" onClick={props.initiateBoard}>Initiate Game</div>
    }
    </div>
  )
}

const mapStateToProps = ({ board, gamePublished }) => ({ board, gamePublished });

/* eslint no-alert:0 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearBoard: () => {
      const confirmed = window.confirm('Are you sure you want to cancel the game?  \nThis will delete the game instance for all players.');
      if (confirmed) {
        dispatch(clearBoardThunkerator());
        dispatch(setQuestionInactive());
        dispatch(clearCurrentQuestion());
      }
    },
    initiateBoard: () => {
      console.log(ownProps);
      dispatch(publishGameThunkerator(ownProps.board));
      dispatch(publishTeamsThunkerator(ownProps.teams));
      dispatch(publishScoreThunkerator(ownProps.score));
    }

  }
}

const HostControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(HostControlPanel);
export default HostControlPanelContainer;
