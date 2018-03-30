import React from 'react';
import store, { incorrectQuestionThunkerator, correctQuestionThunkerator } from '../store';
import { connect } from 'react-redux';


function Question (props) {
  console.log('current question', props.currentQuestion)
  return (
    <div onClick={props.questionAnsweredCorrectly} data-points={props.currentQuestion.pointVal} id="bigQuestion">
      {props.currentQuestion.question.toUpperCase()}
    </div>
  );

}
function mapStateToProps (state) {
  return {
    activeTeam: state.activeTeam,
    currentQuestion: state.currentQuestion,
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    questionAnsweredCorrectly: (event) => {
    const pointValue = ownProps.currentQuestion.pointValue;
    // console.log('pointvalue',pointValue)
    
    }
  }
}

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question);
export default QuestionContainer;