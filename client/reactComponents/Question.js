import React from 'react';

export default function Question (props) {
  return (
    <div className="bigQuestion">
      {props.currentQuestion.question.toUpperCase()}
    </div>
  );
}
