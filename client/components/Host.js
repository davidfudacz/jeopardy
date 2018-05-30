'use strict'
/*
eslint
  class-methods-use-this:0
  no-useless-constructor:0
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Board from './Board';
import AnswerPanel from './AnswerPanel';
import Question from './Question';
import HostControlPanel from './HostControlPanel';
import store, { setHost, clearHost } from '../store';

class Host extends Component {
  constructor () {
    super();
  }

  componentDidMount () {
    store.dispatch(setHost());
  }

  componentWillUnmount () {
    store.dispatch(clearHost());
  }

  render () {
    const displayQuestion = !!this.props.currentQuestion.id;
    return (
      <div id="main">
        <Sidebar />
        <div className="boardWrapper">
        {
          displayQuestion
            ? <Question isHost={this.props.isHost} />
            : <Board />
        }
          <AnswerPanel queue={this.props.queueOfTeamsToAnswer} question={this.props.currentQuestion} />
        </div>
        <HostControlPanel score={this.props.score} teams={this.props.teams} board={this.props.board}/>
      </div>
    )
  }
}

const mapStateToProps = ({board, currentQuestion, isHost, teams, score, queueOfTeamsToAnswer }) =>
  ({board, currentQuestion, isHost, teams, score, queueOfTeamsToAnswer });

const mapDispatchToProps = null;

const HostContainer = connect(mapStateToProps, mapDispatchToProps)(Host);
export default HostContainer;
