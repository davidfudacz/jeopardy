import React from 'react';
import Questions from './Questions';
import { connect } from 'react-redux';


export default function Categories(props) {
  return (
    <div className="category">
      <div className="categoryName">{props.name.toUpperCase()}</div>
      <Questions key={Math.random() * 100} category={props.category} questions={props.questions} />
    </div>
  );
}
