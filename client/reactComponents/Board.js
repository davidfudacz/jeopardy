import React from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';


function Board (props) {
  return (
    <div id="board">
    {
      props.board.length
      ? props.board.map((category, index) => {
        return (<Categories
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

const mapStateToProps = ({board}) => ({board});

const mapDispatchToProps = null;

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)
export default BoardContainer;
