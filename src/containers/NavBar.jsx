import React from 'react';
import ChatStore from '../stores/ChatStore';
import { ChatActions } from '../actions/ChatActions';
import NavBarComponent from '../components/NavBar';

class NavBar extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			userName: ChatStore.getActiveChat(),
		}
	}

	componentDidMount() {
		ChatStore.on("storeUpdated", () => {
			this.setState(
			{
				userName: ChatStore.getActiveChat()
			});
		});
	}

	componentWillUnMount() {
		ChatStore.remove('storeUpdated');
	}

	render() {
		return (
      <NavBarComponent
				addUser={ChatActions.addExternalUser}
        createResponse={ChatActions.generateChat}
			/>
		);
	}
}

export default NavBar;
