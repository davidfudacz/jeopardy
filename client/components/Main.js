
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayGame from './DisplayGame';
import Host from './Host';
import Player from './Player';


export default function Main(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Player} />
        <Route exact path="/game" component={DisplayGame} />
        <Route exact path="/host" component={Host} />
      </div>
    </Router>
  )
}
