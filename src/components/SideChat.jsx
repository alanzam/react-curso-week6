import React from 'react';
import PropTypes from 'prop-types';
import { ChatActions } from '../actions/ChatActions';
import ChatStore from '../stores/ChatStore';

class SideChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userList: ChatStore.getUserList()
		};
	}

	componentDidMount() {
		ChatStore.on("storeUpdated", () => {
			this.setState(
			{
				userList: ChatStore.getUserList()
			});
		});
	}

	componentWillUnMount() {
		ChatStore.remove('storeUpdated');
	}

	render() {
		console.log('rendering sidchat');
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">Chats</span>
          </div>
          <div className="collection">
            {
              this.state.userList.map((user, index) => {
                return (
                  <a
                    key={index}
                    className="collection-item"
										onClick={() => ChatActions.selectChat(user)}
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
