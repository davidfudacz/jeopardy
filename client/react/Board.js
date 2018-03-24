import React from 'react';


export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="board">
        <table>
          <tbody>
            <tr className="categories">
              <th>Category 1</th>
              <th>Category 2 is longer</th>
              <th>Category 3</th>
              <th>Category 4</th>
              <th>Category 5</th>
              <th>Category 6</th>
            </tr>
            <tr>
              <td>100</td>
              <td>200</td>
              <td>300</td>
              <td>400</td>
              <td>500</td>
              <td>600</td>
            </tr>
            <tr>
              <td>500</td>
              <td>600</td>
              <td>700</td>
              <td>800</td>
              <td>700</td>
              <td>800</td>
            </tr>
            <tr>
              <td>500</td>
              <td>600</td>
              <td>700</td>
              <td>800</td>
              <td>700</td>
              <td>800</td>
            </tr>
            <tr>
              <td>500</td>
              <td>600</td>
              <td>700</td>
              <td>800</td>
              <td>700</td>
              <td>800</td>
            </tr>
            <tr>
              <td>500</td>
              <td>600</td>
              <td>700</td>
              <td>800</td>
              <td>700</td>
              <td>800</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
