import React from 'react';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <tr>
        {console.log(this.props.num)}
        {this.props.num.map(value => <td>{value}</td>)}
        </tr>
    );
  }
}
