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
      board: [],
      currentQuestion: {},
      questionActive: false,
      categoryNumber: 6,
    }
    this.findQuestion = this.findQuestion.bind(this);
    this.questionClicked = this.questionClicked.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
  }


  findQuestion (id) {
    let categories = this.state.board;
    for (let i = 0; i < categories.length; i++) {
      let curCategoryQuestions = categories[i].questions;
      for (let j = 0; j < curCategoryQuestions.length; j++) {
        let curQuestion = curCategoryQuestions[j];
        if (+curQuestion.id === +id) return curQuestion;
      }
    }
    return 'Not found!';
  }

  questionClicked (event) {
    console.log(event.target.dataset.question)
    console.log(event.target.dataset.category)
    const questionId = event.target.dataset.id;
    const question = this.findQuestion(questionId);
    this.setState({currentQuestion: question, questionActive: true})

    // socket.emit('questionClicked', question)
  }

  questionAnswered (event) {

    this.setState({ questionActive: false, currentQuestion: {} })
  }

  componentDidMount() {
    axios.get('/api/questions/buildBoard/' + this.state.categoryNumber)
    .then(res => res.data)
    .then(board => this.setState({board: board}))
    .catch(console.error.bind(console));
  }

  render() {
    console.log(this.state.board);
    return (
      <div id="main">
        <Sidebar />
        {this.state.questionActive 
        ? <Question questionAnswered={this.questionAnswered} question={this.state.currentQuestion} />
        : <Board questionClicked={this.questionClicked} board={this.state.board} />
        }
      </div>
    )
  }
}

