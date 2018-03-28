import React from 'react';
import Categories from './Categories';


const Board = (props) => {

    return (
      <div id="board">
        {props.board.map((category, index) => <Categories category={index} questionClicked={props.questionClicked} key={category.id * 1000} name={category.name} questions={category.questions} />)}
      </div>
    );
}

export default Board;