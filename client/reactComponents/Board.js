import React from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';


function Board (props) {
  return (
    <div id="board">
      {props.board.map((category, index) => {
        return (<Categories
          category={index}
          key={category.id * 1000}
          name={category.name}
          questions={category.questions}
        />)
      })}
    </div>
  );
}

function mapStateToProps (state) {
  return {
    board: state.board
  }
}
const BoardContainer = connect(mapStateToProps)(Board)
export default BoardContainer;


// export default class Board extends React.Component {
//   constructor () {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount () {
//     this.unsubscribeFromStore = store.subscribe(() => {
//       this.setState(store.getState());
//     })
//   }

//   componentWillUnmount () {
//     this.unsubscribeFromStore();
//   }

//   render () {
//     return (
//       <div id="board">
//         {this.state.board.map((category, index) => {
//           console.log(category.name);
//           return (<Categories category={index} questionClicked={this.state.questionClicked} key={category.id * 1000} name={category.name} questions={category.questions} />)

//         })}
//       </div>
//     );

//   }
// }
