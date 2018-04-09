import React from 'react';
import { connect } from 'react-redux';


function Question (props) {
  return (
    <div onClick={props.questionAnsweredCorrectly} className="bigQuestion">
      {props.currentQuestion.question.toUpperCase()}
    </div>
  );

}
const mapStateToProps = ({activeTeam, currentQuestion}) => ({activeTeam, currentQuestion})

const mapDispatchToProps = null;

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(Question);
export default QuestionContainer;
