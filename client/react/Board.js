import React from 'react';
import Categories from './Categories';


const Board = (props) => {

  console.log(props.board);
    return (
      <div id="board">
        {props.board.map(category => <Categories key={category.id * 1000} name={category.name} questions={category.questions} />)}
      </div>
    );
}

export default Board;