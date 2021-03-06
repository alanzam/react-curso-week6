import React from 'react';
import PropTypes from 'prop-types';

class SideChat extends React.Component {

	render() {
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">Chats</span>
          </div>
          <div className="collection">
            {
              this.props.userList.map((user, index) => {
                return (
                  <a
                    key={index}
                    className="collection-item"
										onClick={() => this.props.selectChat(user)}
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
