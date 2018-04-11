import React from 'react';
import { connect } from 'react-redux';

function Player(props) {
  return (
    <div>
      <label>Choose your team</label>
      <select>
        {
          props.teams.map(team => <option key={team.fellowId} value={team.fellowId} >{team.name}</option>)
        }
      </select>
    </div>
  )
}

const mapStateToProps = ({ teams }) => ({ teams });

const mapDispatchToProps = null;

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);
export default PlayerContainer;
