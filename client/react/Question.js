import React from 'react';


const Question = (props) => {

    return (
      <div onClick={props.questionAnswered} data-points={props.question.pointVal} id="bigQuestion">
        {props.question.question.toUpperCase()}
      </div>
    );
}

export default Question;