import React from 'react';
import Sidebar from './Sidebar';
import Board from './Board';
import Question from './Question';
import { socket } from './index.js';
import store, { buildBoardThunkerator } from '../store';


const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();


    this.toggleQuestionAsked = this.toggleQuestionAsked.bind(this);
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


  componentDidMount() {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    })

    store.dispatch(buildBoardThunkerator(6));

  }

  componentWillUnmount () {
    this.unsubscribeFromStore();
  }

  render() {
    return (
      <div id="main">
        <Sidebar />
        {this.state.questionActive
        ? <Question />
        : <Board />
        }
      </div>
    )
  }
}

