import React from 'react';
import store, { questionClicked, changeActiveTeam, questionClickedThunkerator } from '../store';
import {connect} from 'react-redux';

function Questions(props) {
  return (
    <div className="categoryQuestions">
      {props.questions.map((question, index) => (
        <div className="question"
          // data-category_index={props.category}
          data-question_index={index}
          data-id={question.id}
          onClick={props.questionClicked}
          key={question.id}>
          {question.asked ? '' : question.pointVal}
        </div>
      )
      )}
    </div>
  );

}
const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    questionClicked: (event) => {

      console.log('inside question div',event.target.dataset)
      //set a team - this will be removed when buzzing in functionality is enabled
      const activeTeamId = 1;

      const questionIndex = +event.target.dataset.question_index;
      const categoryIndex = +ownProps.category;
      dispatch(changeActiveTeam(activeTeamId));

      dispatch(questionClickedThunkerator(+event.target.dataset.id, categoryIndex, questionIndex))
    }
  }
}

const QuestionsContainer = connect(mapStateToProps, mapDispatchToProps)(Questions)
export default QuestionsContainer;