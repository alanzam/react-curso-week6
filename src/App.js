import React from 'react';
import NavBar from './components/NavBar';
import ChatTable from './components/ChatTable';
import SideChat from './components/SideChat';
import Notification from './components/Notification';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			
		}
  }

	componentDidMount() {

	}

	componentDidUpdate() {

	}

	render() {
		return (
			<div className="container">
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
