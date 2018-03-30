import React from 'react';
import store from '../store';


export default class Sidebar extends React.Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromStore();
  }

  render () {
    return (
      <div className='sidebar'>
        <h1>TEAMS</h1>
        {this.state.teams.map(team => {
          return (
            <div key={Math.random() * 10} className="team">
              <div className="teamName">
                {team.name}
              </div>
              <div className="teamScore">
                {this.state.score[team.id]}
              </div>
            </div>
          )
        })}
  
      </div>
    );

  }
}
