import React from 'react';
import PropTypes from 'prop-types';
import { generateNewUser } from '../utils/chatHelper';
import * as ChatActions from '../actions/ChatActions';

class SideChat extends React.Component {
	constructor(props) {
    super(props);
		this.addUser = this.addUser.bind(this);
		this.selectChat = this.selectChat.bind(this);
    this.state = { userList : [] };
  }

	addUser() {
		var user = generateNewUser();
		user.then((u) => {
			this.setState((state, props) => {
					state.userList.push(u);
					return state;
				});
			});
	}

	selectChat(username) {
		ChatActions.selectChat(username);
	}

	render() {
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title" onClick={() => this.addUser()}>Chats</span>
          </div>
          <div className="collection">
            {
              this.state.userList.map((user, index) => {
                return (
                  <a
                    key={index}
                    className="collection-item"
										onClick={() => this.selectChat(user)}
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
