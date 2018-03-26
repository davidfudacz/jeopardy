import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Board from './Board';
import Question from './Question';
import {socket} from './index.js';


const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);


export default class Main extends React.Component {
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
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 2,
              pointVal: 200,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 3,
              pointVal: 300,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 4,
              pointVal: 400,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 5,
              pointVal: 500,
              question: 'What is the meaning of life?',
              asked: false,
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
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 7,
              pointVal: 200,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 8,
              pointVal: 300,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 9,
              pointVal: 400,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 10,
              pointVal: 500,
              question: 'What is the meaning of life?',
              asked: false,
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
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 12,
              pointVal: 200,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 13,
              pointVal: 300,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 14,
              pointVal: 400,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 15,
              pointVal: 500,
              question: 'What is the meaning of life?',
              asked: false,
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
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 17,
              pointVal: 200,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 18,
              pointVal: 300,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 19,
              pointVal: 400,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 20,
              pointVal: 500,
              question: 'What is the meaning of life?',
              asked: false,
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
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 22,
              pointVal: 200,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 23,
              pointVal: 300,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 24,
              pointVal: 400,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 25,
              pointVal: 500,
              question: 'What is the meaning of life?',
              asked: false,
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
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 27,
              pointVal: 200,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 28,
              pointVal: 300,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 29,
              pointVal: 400,
              question: 'What is the meaning of life?',
              asked: false,
            },
            {
              id: 30,
              pointVal: 500,
              question: 'What is the meaning of life?',
              asked: false,
            }
          ]
        }
      ],
      currentQuestion: {},
      questionActive: false,
    }
    this.findQuestion = this.findQuestion.bind(this);
  }

  reset() {
  }

  findQuestion (id) {
    let categories = this.state.board;
    for (let i = 0; i < categories.length; i++) {
      let curCategoryQuestions = categories[i].questions;
      for (let j = 0; j < curCategoryQuestions.length; j++) {
        let curQuestion = curCategoryQuestions[j];
        if (+curQuestion.id === id) return curQuestion;
      }
    }
    return 'Question not found!';
  }

  questionClicked (id,) {
    let question = this.findQuestion(id);
    this.setState({currentQuestion: question, questionActive: true})
    return question;

  }

  questionAnswered () {
    this.state.currentQuestion.setState({asked:true});
    this.setState({questionActive: false})
  }

  componentDidMount() {
    const questions = document.getElementsByClassName('question');
    Array.prototype.forEach.call(questions, (question) => {
      question.onclick = () => {
        socket.emit('questionClicked', this.questionClicked(+question.dataset.id));
      }
    });
  }

  render() {
    return (
      <div id="main">
        <Sidebar />
        {this.state.questionActive 
        ? <Question question={this.state.currentQuestion} />
        : <Board board={this.state.board} />
        }
      </div>
    )
  }
}

