import React from 'react';
import { connect } from 'react-redux';
import { questionNotAnsweredThunkerator } from '../store';

function AnswerPanel(props) {
  return (
    <div className="answerPanel">
      <h1>--{props.currentQuestion.answer}--</h1>
      <div className="answerButtons">
      <div onClick={props.handleCorrect} className="hostPanelItem button">Correct</div>
      <div onClick={props.handleIncorrect} className="hostPanelItem button">Incorrect</div>
      <div onClick={props.handleNotAnswered} className="hostPanelItem button">Not Answered</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({currentQuestion, activeTeam}) => ({currentQuestion, activeTeam});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleCorrect: () => {
      
    },
    handleIncorrect: () => {

    },
    handleNotAnswered: () => {
      //this sets question inactive and clears current question, also logs question stats to DB.
      dispatch(questionNotAnsweredThunkerator(ownProps.question.id));
    }
  }
}

const AnswerPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AnswerPanel);
export default AnswerPanelContainer;
