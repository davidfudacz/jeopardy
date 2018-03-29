import React from 'react';
import Categories from './Categories';
import store from '../store';


export default class Board extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromStore();
  }

  render () {
    return (
      <div id="board">
        {this.state.board.map((category, index) => {
          console.log(category.name);
          return (<Categories category={index} questionClicked={this.state.questionClicked} key={category.id * 1000} name={category.name} questions={category.questions} />)

        })}
      </div>
    );

  }
}
