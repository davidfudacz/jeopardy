import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Board from './Board';
import Question from './Question';
import { socket } from './index.js';
import store, { boardBuilt, buildBoard, questionClicked } from '../store';


const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();


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

    const questionIndex = event.target.dataset.question;
    const categoryIndex = event.target.dataset.category;

    store.dispatch(questionClicked(question, categoryIndex, questionIndex))

    // socket.emit('questionClicked', question)
  }

  questionAnswered (event) {
    const pointValue = event.target.dataset.points;

    this.toggleQuestionAsked(this.state.currentQuestionLocation)
    this.setState({ questionActive: false, currentQuestion: {} })

  }

  componentDidMount() {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    })

    store.dispatch(buildBoard(6));

  }

  componentWillUnmount () {
    this.unsubscribeFromStore();
  }

  render() {
    return (
      <div id="main">
        <Sidebar />
        {this.state.questionActive 
        ? <Question questionAnswered={this.questionAnswered} question={this.state.currentQuestion} />
        : <Board questionClicked={this.questionClicked} />
        }
      </div>
    )
  }
}

