import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">React Chat</span>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
