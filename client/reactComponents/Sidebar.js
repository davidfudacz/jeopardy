import React from 'react';
import { connect } from 'react-redux';

function Sidebar(props) {
  const showBoard = props.isHost || props.gamePublished;
  return (
    <div className="sidebar">
      <h1>TEAMS</h1>
      {
        showBoard
          ? props.teams.map(team => (
            <div key={team.fellowId} className="team">
              <div key={team.fellowId + team.teamName} className="teamName">
                {team.teamName}
              </div>
              <div key={team.fellowId + 'score'} className="teamScore">
                {props.score[team.fellowId]}
              </div>
            </div>
          )
          )
          : ''
      }

    </div>
  );
}

const mapStateToProps = ({ teams, score, isHost, gamePublished }) => ({ teams, score, isHost, gamePublished });

const mapDispatchToProps = null;

const SidebarWrapper = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarWrapper;
