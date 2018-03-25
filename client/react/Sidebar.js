import React from 'react';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    }


  render() {
    return (
        <div className='sidebar'>
            <h1>TEAMS</h1>
            
            <div className="team">
              <div className="teamName">
              Team Kevin is a long name
              </div>
              <div className="teamScore">
              500
              </div>
            </div>
            
            <div className="team">
              <div className="teamName">
              Team Ellen
              </div>
              <div className="teamScore">
              500
              </div>
            </div>
            
            <div className="team">
              <div className="teamName">
              Team Pat
              </div>
              <div className="teamScore">
              500
              </div>
            </div>
        </div>
    );
  }
}
