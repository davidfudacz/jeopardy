import React from 'react';
import Questions from './Questions';


export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="category">
        <div className="categoryName">{this.props.name}</div>
        <Questions key={Math.random()*100} questions={this.props.questions} />
      </div>
    );
  }
}


