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
      score: {
        1: 0,
        2: 0,
        3: 0,
        4: 0
      },
      teams: [
        {
          id: 1,
          name: 'Kevins Team'
        },
        {
          id: 2,
          name: 'Erikas Team'
        },
        {
          id: 3,
          name: 'Ellens Team'
        },
        {
          id: 4,
          name: 'Bens Team'
        }
      ],

    }
    this.findQuestion = this.findQuestion.bind(this);
    this.questionClicked = this.questionClicked.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
    this.toggleQuestionAsked = this.toggleQuestionAsked.bind(this);
    this.changeScore = this.changeScore.bind(this);
  }

  toggleQuestionAsked ([categoryIndex, questionIndex]) {
    let board = this.state.board.slice();
    board.map((category, index) => {
      if (index !== +categoryIndex) return category;
      category.questions.map((question, qIndex) => {
        if (qIndex !== +questionIndex) return question;
        question.asked = !question.asked;
        return question;
      })
    })
    this.setState({ board })
  }


  changeScore (rightOrWrong, teamId, value) {
    let score = {...this.state.score}
    let pointValue = +value;
    switch (rightOrWrong) {
      case 'CORRECT':
        this.setState({ score: {...score, [teamId]: (this.state.score[teamId] + pointValue)}})
        break;
      case 'INCORRECT':
        this.setState({ score: {...score, [teamId]: (this.state.score[teamId] - pointValue)}})
        break;
      default:
        return;
    }

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
    const pointValue = event.target.dataset.points;

    this.toggleQuestionAsked(this.state.currentQuestionLocation)
    this.setState({ questionActive: false, currentQuestion: {} })

    this.changeScore('INCORRECT', 1, pointValue)

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
        <Sidebar teams={this.state.teams} score={this.state.score} />
        {this.state.questionActive 
        ? <Question questionAnswered={this.questionAnswered} question={this.state.currentQuestion} />
        : <Board questionClicked={this.questionClicked} board={this.state.board} />
        }
      </div>
    )
  }
}

