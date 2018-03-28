import React from 'react';


const Question = (props) => {

    return (
      <div onClick={props.questionAnswered} id="bigQuestion">
        {props.question.question}
      </div>
    );
}

export default Question;