import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Board from './Board';
import AnswerPanel from './AnswerPanel';
import Question from './Question';
import HostControlPanel from './HostControlPanel';

function Host(props) {
  return (
    <div id="main">
      <Sidebar />
      <div className="boardWrapper">
      {
        props.questionActive
          ? <Question />
          : <Board />
      }
        <AnswerPanel question={props.currentQuestion} />
      </div>
      <HostControlPanel />
    </div>
  )
}

const mapStateToProps = ({questionActive, currentQuestion}) => ({questionActive, currentQuestion});

const mapDispatchToProps = null;

const HostContainer = connect(mapStateToProps, mapDispatchToProps)(Host);
export default HostContainer;
