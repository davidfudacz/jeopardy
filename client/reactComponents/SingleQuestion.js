import React from 'react';
import { findAndSetCurrentQuestionThunkerator, setQuestionActive } from '../store';
import { connect } from 'react-redux';

function SingleQuestion(props) {
  return (
    <div
      className="question"
      data-id={props.question.id}
      onClick={props.questionClicked}
      key={props.question.id}>
      {props.question.asked ? '' : props.question.pointVal}
    </div>
  );

}
const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    questionClicked: (event) => {
      
      dispatch(findAndSetCurrentQuestionThunkerator(ownProps.board, ownProps.question.id))
      dispatch(setQuestionActive());
    }
  }
}

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(SingleQuestion)
export default SingleQuestionContainer;
