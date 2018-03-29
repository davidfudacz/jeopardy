import React from 'react';


const Questions = (props) => {
  return (
    <div className="categoryQuestions">
      {props.questions.map((question, index) => (
        <div className="question" 
          data-id={question.id} 
          data-category={props.category} 
          data-question={index} 
          data-asked={question.asked}   
          onClick={props.questionClicked} 
          key={question.id}>
          {question.asked ? '' : question.pointVal}
        </div>
        )
      )}
    </div>
  );

}

export default Questions;