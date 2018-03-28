import React from 'react';
import Questions from './Questions';


const Categories = (props) => {
    return (
      <div className="category">
        <div className="categoryName">{props.name}</div>
        <Questions key={Math.random()*100} category={props.category} questionClicked={props.questionClicked} questions={props.questions} />
      </div>
    );
  
}



export default Categories;