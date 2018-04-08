import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Board from './Board';
import AnswerPanel from './AnswerPanel';
import HostControlPanel from './HostControlPanel';

function Host(props) {
  return (
    <div id="main">
      <Sidebar />
      <div className="boardWrapper">
        <Board />
        <AnswerPanel />
      </div>
      <HostControlPanel />
    </div>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = null;

const HostContainer = connect(mapStateToProps, mapDispatchToProps)(Host);
export default HostContainer;
