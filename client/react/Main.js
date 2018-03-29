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
      currentQuestionLocation: [],
      questionActive: false,
      categoryNumber: 6,
      score: [],

    }
    this.findQuestion = this.findQuestion.bind(this);
    this.questionClicked = this.questionClicked.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
    this.toggleQuestionAsked = this.toggleQuestionAsked.bind(this);
  }

  toggleQuestionAsked ([categoryIndex, questionIndex]) {
    let board = this.state.board.slice();
    board.map((category,index) => {
      if (index !== +categoryIndex) return category;
      category.questions.map((question,index) => {
        if (index !== +questionIndex) return question;
        console.log('i hit');
        question.asked = !question.asked;
        return question;
      })
    })
    this.setState({ board })
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
    if (event.target.dataset.asked === 'true') return;
    const questionId = event.target.dataset.id;
    const question = this.findQuestion(questionId);
    this.setState({
      currentQuestion: question, 
      questionActive: true, 
      currentQuestionLocation: [
        event.target.dataset.category, 
        event.target.dataset.question
      ]
    })

    // socket.emit('questionClicked', question)
  }

  questionAnswered (event) {

    this.toggleQuestionAsked(this.state.currentQuestionLocation)
    this.setState({ questionActive: false, currentQuestion: {} })
    console.log(this.state.board);
  }

  componentDidMount() {
    axios.get('/api/questions/buildBoard/' + this.state.categoryNumber)
    .then(res => res.data)
    .then(board => this.setState({board: board}))
    .catch(console.error.bind(console));
  }

  render() {
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

