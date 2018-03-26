import React from 'react';


export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="bigQuestion">
        {this.props.question.question}
      </div>
    );
  }
}
