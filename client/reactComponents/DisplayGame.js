
import React from 'react';
import Question from './Question';
import Board from './Board';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';


function DisplayGame(props) {
  return (
    <div id="main">
      <Sidebar />
      {
        props.questionActive
          ? <Question />
          : <Board />
      }
    </div>
  );
}

const mapStateToProps = ({ questionActive }) => ({ questionActive });

const mapDispatchToProps = null;

const DisplayGameContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayGame)
export default DisplayGameContainer;
