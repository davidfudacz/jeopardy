import React from 'react';
import { connect } from 'react-redux';

function Sidebar(props) {
  const showBoard = props.isHost || props.gamePublished;
  const activeTeamId = props.queueOfTeamsToAnswer[0];
  return (
    <div className="sidebar">
      <h1>TEAMS</h1>
      {
        showBoard
          ? props.teams.map(team => (
            <div key={team.fellowId} className={activeTeamId === team.fellowId ? `team active` : `team`}>
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

const mapStateToProps = ({ teams, score, isHost, gamePublished, queueOfTeamsToAnswer }) =>
  ({ teams, score, isHost, gamePublished, queueOfTeamsToAnswer });

const mapDispatchToProps = null;

const SidebarWrapper = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarWrapper;
