import React from 'react';


const Questions = (props) => {
  console.log(props)
    return (
      <div className="categoryQuestions">
        {props.questions.map((question, index) => <div className="question" data-category={props.category} data-question={index} onClick={props.questionClicked} key={question.id}>{question.asked ? '' : question.pointVal}</div> )}
      </div>
    );

}

export default Questions;