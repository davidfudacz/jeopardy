import React from 'react';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    }


  render() {
    return (
      <tr className="categories">
      {this.props.num.map(category => <td>{category}</td>)}
      </tr>
    );
  }
}
