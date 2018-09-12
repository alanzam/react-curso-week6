import React from 'react';
import PropTypes from 'prop-types';
import { selectChat } from '../actions/ChatActions';
import ChatStore from '../stores/ChatStore';

class SideChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userList: ChatStore.getUserList()
		};
	}

	componentDidMount() {
		ChatStore.on("userListUpdated", () => {
			this.setState(
			{
				userList: ChatStore.getUserList()
			});
		});
	}

	componentWillUnMount() {
		ChatStore.remove('userListUpdated');
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
										onClick={() => selectChat(user)}
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
