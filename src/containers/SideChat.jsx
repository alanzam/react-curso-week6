import React from 'react';
import ChatStore from '../stores/ChatStore';
import { ChatActions } from '../actions/ChatActions';
import SideChatComponent from '../components/SideChat';

class SideChat extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			userList: ChatStore.getUserList(),
		}
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
		return (
      <SideChatComponent
				userList={this.state.userList}
        selectChat={ChatActions.selectChat}
			/>
		);
	}
}

export default SideChat;
