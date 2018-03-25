import React from 'react';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      pointVals: [100, 200, 300, 400, 500],
      questions: [],
    }
  }


  render() {
    return (
      <div id="board">
        <div className="category">
          <div className="categoryName">Category 1</div>
          <div className="categoryQuestions">
            <div className="question">100</div>
            <div className="question">200</div>
            <div className="question">300</div>
            <div className="question">400</div>
            <div className="question">500</div>
          </div>
        </div>
        <div className="category">
          <div className="categoryName">Category 2</div>
          <div className="categoryQuestions">
            <div className="question">100</div>
            <div className="question">200</div>
            <div className="question">300</div>
            <div className="question">400</div>
            <div className="question">500</div>
          </div>
        </div>
        <div className="category">
          <div className="categoryName">Category 3</div>
          <div className="categoryQuestions">
            <div className="question">100</div>
            <div className="question">200</div>
            <div className="question">300</div>
            <div className="question">400</div>
            <div className="question">500</div>
          </div>
        </div>
        <div className="category">
          <div className="categoryName">Category 4</div>
          <div className="categoryQuestions">
            <div className="question">100</div>
            <div className="question">200</div>
            <div className="question">300</div>
            <div className="question">400</div>
            <div className="question">500</div>
          </div>
        </div>
        <div className="category">
          <div className="categoryName">Category 5</div>
          <div className="categoryQuestions">
            <div className="question">100</div>
            <div className="question">200</div>
            <div className="question">300</div>
            <div className="question">400</div>
            <div className="question">500</div>
          </div>
        </div>
        <div className="category">
          <div className="categoryName">Category 6</div>
          <div className="categoryQuestions">
            <div className="question">100</div>
            <div className="question">200</div>
            <div className="question">300</div>
            <div className="question">400</div>
            <div className="question">500</div>
          </div>
        </div>
      </div>
    );
  }
}
