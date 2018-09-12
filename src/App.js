import React from 'react';
import NavBar from './components/NavBar';
import ChatTable from './components/ChatTable';
import SideChat from './components/SideChat';
import Notification from './components/Notification';
import storage from 'key-storage';


function getStoredState() {
	var t = new Date();
	t.setSeconds(t.getSeconds() - 60);
	const lastState = storage.get('lastState');
	const lastUpdated = storage.get('lastUpdated');
	if (lastState && t.getTime() < lastUpdated) {
		return JSON.parse(lastState);
	}
	return null;
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.addChat = this.addChat.bind(this);
		this.selectChat = this.selectChat.bind(this);
		this.addUser = this.addUser.bind(this);
		this.state = {
			activeChat: 'Test1',
			messageList: {
				'Test1': []
			},
			userList: ['Test1', 'Test2']
		};
	}

	componentDidMount() {
		const lastState = getStoredState();
		if (lastState)
			this.setState(lastState);
	}

	componentDidUpdate() {
		storage.set('lastState', JSON.stringify(this.state));
		const t = new Date();
		storage.set('lastUpdated', t.getTime());
	}

	addChat(message) {
		this.setState((state, props) => {
			state.messageList[state.activeChat].push(message);
			return state;
		});
	}

	selectChat(userName) {
		this.setState((state, props) => {
			state.activeChat = userName;
			state.messageList[userName] = state.messageList[userName] || [];
			return state;
		});
	}

	addUser(username) {
		this.setState((state, props) => {
			state.userList.push(username);
			return state;
		});
	}


	render() {
		console.log('rendering app');
		return (
			<div className="container">
				<NavBar
					addChat={this.addChat}
					addUser={this.addUser}
					userName={this.state.activeChat}
					/>
				<div className="row">
					<ChatTable
						userName={this.state.activeChat}
						messageList={this.state.messageList[this.state.activeChat]}
						addChat={this.addChat}
						/>
		      <SideChat
						userList={this.state.userList}
						selectChat={this.selectChat}
						/>
		    </div>
			</div>
		);
	}
}

export default App;
