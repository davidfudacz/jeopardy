
import React from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';


function Board (props) {
  const showBoard = props.isHost || props.gamePublished;
  return (
    <div className="board">
    {
      showBoard
      ? props.board.map((category, index) => {
        return (<Categories
          isHost={props.isHost}
          board={props.board}
          category={index}
          key={'category' + category.id}
          name={category.name}
          questions={category.questions}
        />)
      })
      : <span>Please wait for the host to initialize the game</span>
    }
    </div>
  );
}

const mapStateToProps = ({board, isHost, gamePublished }) => ({board, isHost, gamePublished });

const mapDispatchToProps = null;

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)
export default BoardContainer;
