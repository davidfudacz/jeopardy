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

  questionClicked (id) {
    socket.emit('questionClicked', this.questionClicked(+question.dataset.id))






    let question = this.findQuestion(id);
    this.setState({currentQuestion: question, questionActive: true})
    return question;

  }

  questionAnswered () {
    this.state.currentQuestion.setState({asked:true});
    this.setState({questionActive: false})
  }

  componentDidMount() {
    console.log('component mounted')
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
        ? <Question question={this.state.currentQuestion} />
        : <Board questionClicked={this.questionClicked} board={this.state.board} />
        }
      </div>
    )
  }
}

