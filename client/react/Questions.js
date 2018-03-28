import React from 'react';


const Questions = () => {
    return (
      <div className="categoryQuestions">
        {this.props.questions.map(question => <div className="question" data-id={question.id} onClick={props.questionClicked} key={question.id}>{question.pointVal}</div> )}
      </div>
    );

}

export default Questions;