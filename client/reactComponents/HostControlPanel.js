import React from 'react';
import { connect } from 'react-redux';
import { buildBoardThunkerator, clearBoardThunkerator, setQuestionInactive, clearCurrentQuestion } from '../store';
import BuildGame from './BuildGame';

function HostControlPanel(props) {
  return (
    <div className="hostControlPanel">
    <BuildGame />
    {
      props.board.length
        ? <div className="hostPanelItem button" onClick={props.clearBoard}>Cancel Board</div>
        : <div className="hostPanelItem button" onClick={props.initiateBoard}>Initiate Board</div>
    }
    </div>
  )
}

const mapStateToProps = ({board}) => ({board});

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
      dispatch(buildBoardThunkerator(6));
    }

  }
}

const HostControlPanelContainer = connect(mapStateToProps, mapDispatchToProps)(HostControlPanel);
export default HostControlPanelContainer;
