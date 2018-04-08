import React from 'react';
import QuestionsColumn from './QuestionsColumn';


export default function Categories(props) {
  return (
    <div className="category">
      <div className="categoryName">{props.name.toUpperCase()}</div>
      <QuestionsColumn key={Math.random() * 100} category={props.category} questions={props.questions} />
    </div>
  );
}
