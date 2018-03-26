import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Board from './Board';
import {socket} from './index.js';


const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.reset = this.reset.bind(this);
    // this.playSong = this.playSong.bind(this);
  }

  reset() {
    // this.setState()
  }

  handleClick(albumId) {
    axios.get('api/albums/' + albumId)
      .then(toJson)
      .then(album => {
        this.setState({ currentAlbum: album })
      })
      .catch(logError);



  }

  componentDidMount() {
    const questions = document.getElementsByClassName('question');
    Array.prototype.forEach.call(questions, (question) => {
      question.onclick = () => {
        console.log(question);

        socket.emit('questionClicked', question.nodeValue, question.innerHTML);
      }
    });
  }

  render() {
    return (
      <div id="main">
        <Sidebar />
        <Board />
      </div>
    )
  }
}

