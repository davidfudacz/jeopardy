
import React from 'react';
import Question from './Question';
import Board from './Board';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';


function DisplayGame(props) {
  const displayQuestion = !!props.currentQuestion.id;
  return (
    <div id="main">
      <Sidebar />
      {
        displayQuestion
          ? <Question />
          : <Board />
      }
    </div>
  );
}

const mapStateToProps = ({ currentQuestion }) => ({ currentQuestion });

const mapDispatchToProps = null;

const DisplayGameContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayGame)
export default DisplayGameContainer;
