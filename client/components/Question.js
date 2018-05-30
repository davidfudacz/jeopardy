import React from 'react';
import { connect } from 'react-redux';
import { setQuestionActiveThunkerator } from '../store';


function Question (props) {
  return (
    <div onClick={props.handleClick} className="bigQuestion">
      {props.currentQuestion.question.toUpperCase()}
      {
        props.isHost
          ? <div className="instructions">Click anywhere in this section to open the question for response</div>
          : ''
      }
    </div>
  );
}
const mapStateToProps = ({activeTeam, currentQuestion, isHost}) => ({activeTeam, currentQuestion, isHost})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => {
      if (ownProps.isHost) {
        console.log('here');
        dispatch(setQuestionActiveThunkerator());
      }
    }
  }
}

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question);
export default QuestionContainer;
