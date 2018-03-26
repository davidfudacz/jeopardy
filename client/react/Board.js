import React from 'react';
import Categories from './Categories';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        {
          name: 'Category 1',
          questions: [
            {
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 2',
          questions: [
            {
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 3',
          questions: [
            {
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 4',
          questions: [
            {
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 5',
          questions: [
            {
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 6',
          questions: [
            {
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        }
      ],
      doubleJeopardy: false,
    }
  }


  render() {
    return (
      <div id="board">
        {this.state.board.map(category => <Categories key={category.name} name={category.name} questions={category.questions} />)}
      </div>
    );
  }
}
