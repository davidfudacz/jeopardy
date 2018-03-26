import React from 'react';


export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="categoryQuestions">
        {this.props.questions.map(question => <div className="question" data-id={question.id} key={question.id}>{question.pointVal}</div> )}
      </div>
    );
  }
}
