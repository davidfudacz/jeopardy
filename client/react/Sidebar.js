import React from 'react';


export default function Sidebar (props) {

  return (
    <div className='sidebar'>
      <h1>TEAMS</h1>
      {props.teams.map(team => {
        return (
          <div key={Math.random() * 10} className="team">
            <div className="teamName">
              {team.name}
            </div>
            <div className="teamScore">
              {props.score[team.id]}
            </div>
          </div>
        )
      })}

    </div>
  );
}
