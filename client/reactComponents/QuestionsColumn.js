import React from 'react';
import SingleQuestion from './SingleQuestion'

export default function QuestionsColumn(props) {
  return (
    <div className="categoryQuestions">
      {
        props.questions.map(question => <SingleQuestion board={props.board} key={question.id} question={question} />)
      }
    </div>
  );
}
