import React from 'react';
import ChatStore from '../stores/ChatStore';
import ChatTableComponent from '../components/ChatTable';

class ChatTable extends React.Component {
	constructor(props) {
		super(props);
		this.sendChat = this.sendChat.bind(this);
		this.state = {
			userName: ChatStore.getActiveChat(),
			messageList: ChatStore.getCurrentMessageList()
		}
	}

	componentDidMount() {
		ChatStore.on("storeUpdated", () => {
			this.setState(
			{
				userName: ChatStore.getActiveChat(),
				messageList: ChatStore.getCurrentMessageList()
			});
		});
	}

	componentWillUnMount() {
		ChatStore.remove('storeUpdated');
	}

	sendChat(message) {
		addChat(message);
	}

	render() {
		return (
      <ChatTableComponent
				sendChat={this.sendChat}
				{...this.state}
			/>
		);
	}
}

export default ChatTable;
