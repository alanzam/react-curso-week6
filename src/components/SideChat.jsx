import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

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
                  <Link
                    key={index}
                    className="collection-item"
										to={`/Chat/${user}`}
                  >
										{user}
                  </Link>
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
