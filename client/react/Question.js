import React from 'react';
import store from '../store';


export default class Question extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }

  render() {
    return (
      <div onClick={this.state.questionAnswered} data-points={this.state.question.pointVal} id="bigQuestion">
        {this.state.question.question.toUpperCase()}
      </div>
    );

  }
}