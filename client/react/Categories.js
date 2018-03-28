import React from 'react';
import Questions from './Questions';


const Categories = () => {
    return (
      <div className="category">
        <div className="categoryName">{this.props.name}</div>
        <Questions key={Math.random()*100} questionClicked={props.questionClicked} questions={this.props.questions} />
      </div>
    );
  
}



export default Categories;