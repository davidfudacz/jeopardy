
import React from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';


function Board (props) {
  return (
    <div className="board">
    {
      props.board.length
      ? props.board.map((category, index) => {
        return (<Categories
          isHost={props.isHost}
          board={props.board}
          category={index}
          key={category.id * 1000}
          name={category.name}
          questions={category.questions}
        />)
      })
      : <span>Please wait for the host to initialize the game</span>
    }
    </div>
  );
}

const mapStateToProps = ({board, isHost}) => ({board, isHost});

const mapDispatchToProps = null;

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)
export default BoardContainer;
