import React from 'react';
import Sidebar from './Sidebar';
import Question from './Question';
import Board from './Board';


const DisplayGame = (props) => {

    return (
      <div id="main">
        <Sidebar teams={props.state.teams} score={props.state.score} />
        {props.state.questionActive 
        ? <Question questionAnswered={props.questionAnswered} question={props.state.currentQuestion} />
        : <Board questionClicked={props.questionClicked} board={props.state.board} />
        }
      </div>
    );
}

export default DisplayGame;