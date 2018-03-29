import React from 'react';
import store from '../store';

export default class Questions extends React.Component {
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
      <div className="categoryQuestions">
        {this.state.questions.map((question, index) => (
          <div className="question" 
            data-id={question.id} 
            data-category={this.state.category} 
            data-question={index} 
            data-asked={question.asked}   
            onClick={this.state.questionClicked} 
            key={question.id}>
            {question.asked ? '' : question.pointVal}
          </div>
          )
        )}
      </div>
    );

  }

}