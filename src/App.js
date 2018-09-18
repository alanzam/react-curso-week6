import React from 'react';
import NavBar from './containers/NavBar';
import ChatTable from './containers/ChatTable';
import SideChat from './containers/SideChat';
import Notification from './containers/Notification';

class App extends React.Component {

	render() {
		return (
			<div className="container">
				<Notification />
				<NavBar />
				<div className="row">
					<ChatTable />
		      <SideChat />
		    </div>
			</div>
		);
	}
}

export default App;
