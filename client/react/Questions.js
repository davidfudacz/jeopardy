import React from 'react';


const Questions = (props) => {
    return (
      <div className="categoryQuestions">
        {props.questions.map(question => <div className="question" data-id={question.id} onClick={props.questionClicked} key={question.id}>{question.pointVal}</div> )}
      </div>
    );

}

export default Questions;