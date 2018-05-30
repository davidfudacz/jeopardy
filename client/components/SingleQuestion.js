import React from 'react';
import { findAndSetCurrentQuestionThunkerator } from '../store';
import { connect } from 'react-redux';

function SingleQuestion(props) {
  return (
    <div
      className="question"
      data-host={props.isHost}
      data-asked={props.question.asked}
      onClick={props.questionClicked}
      key={props.question.id}>
      {props.question.asked ? '' : props.question.pointValue}
    </div>
  );

}
const mapStateToProps = ({isHost}) => ({isHost});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    questionClicked: () => {
      if (ownProps.question.asked) return;
      if (!ownProps.isHost) return;
      dispatch(findAndSetCurrentQuestionThunkerator(ownProps.board, ownProps.question.id))
    }
  }
}

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(SingleQuestion)
export default SingleQuestionContainer;
