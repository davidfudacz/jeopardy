import React from 'react';
import { connect } from 'react-redux';

function Player (props) {
  return (
    <h1>Player page</h1>
  )
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = null;

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);
export default PlayerContainer;
