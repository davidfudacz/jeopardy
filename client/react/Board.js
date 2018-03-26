import React from 'react';
import Categories from './Categories';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        {
          name: 'Category 1',
          id: 1,
          questions: [
            {
              id: 1,
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              id: 2,
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              id: 3,
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              id: 4,
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              id: 5,
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 2',
          id: 2,
          questions: [
            {
              id: 6,
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              id: 7,
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              id: 8,
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              id: 9,
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              id: 10,
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 3',
          id: 3,
          questions: [
            {
              id: 11,
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              id: 12,
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              id: 13,
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              id: 14,
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              id: 15,
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 4',
          id: 4,
          questions: [
            {
              id: 16,
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              id: 17,
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              id: 18,
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              id: 19,
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              id: 20,
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 5',
          id: 5,
          questions: [
            {
              id: 21,
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              id: 22,
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              id: 23,
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              id: 24,
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              id: 25,
              pointVal: 500,
              question: 'What is the meaning of life?'
            }
          ]
        },
        {
          name: 'Category 6',
          id: 6,
          questions: [
            {
              id: 26,
              pointVal: 100,
              question: 'What is the meaning of life?'
            },
            {
              id: 27,
              pointVal: 200,
              question: 'What is the meaning of life?'
            },
            {
              id: 28,
              pointVal: 300,
              question: 'What is the meaning of life?'
            },
            {
              id: 29,
              pointVal: 400,
              question: 'What is the meaning of life?'
            },
            {
              id: 30,
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
        {this.state.board.map(category => <Categories key={category.id} name={category.name} questions={category.questions} />)}
      </div>
    );
  }
}
