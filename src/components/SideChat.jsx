import React from 'react';
import PropTypes from 'prop-types';

class SideChat extends React.Component {
	constructor(props) {
    super(props);
    this.userList = [ 'Test1' ];
  }

	render() {
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">Chats</span>
          </div>
          <div className="collection">
            {
              this.userList.map((user, index) => {
                return (
                  <a
                    key={index}
                    className="collection-item"
                  >
										{user}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
		);
	}
}


export default SideChat;
