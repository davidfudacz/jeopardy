import React from 'react';
import Questions from './Questions';
import store from '../store';


export default class Categories extends React.Component {
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
    console.log(this.props);
    return (
      <div className="category">
        <div className="categoryName">{this.props.name.toUpperCase()}</div>
        <Questions key={Math.random() * 100} category={this.state.category} questionClicked={this.state.questionClicked} questions={this.state.questions} />
      </div>
    );

  }

}
