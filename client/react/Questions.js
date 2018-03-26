import React from 'react';


export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.questions[0].question)
    return (
      <div className="categoryQuestions">
        {this.props.questions.map(question => <div className="question" value={question.question} key={question.id}>{question.pointVal}</div> )}
      </div>
    );
  }
}
