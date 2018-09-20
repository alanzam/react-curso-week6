import React from 'react';
import NavBar from './containers/NavBar';
import ChatTable from './containers/ChatTable';
import SideChat from './containers/SideChat';
import Notification from './containers/Notification';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {

	render() {
		return (
			<div className="container">
				<Notification />
				<NavBar />
				<div className="row">
					<Router>
						<Switch>
							<Route path="/Chat/:userName?"
								component={()=>(<div><ChatTable/><SideChat/></div>)}
							/>
							<Route component={()=>(<div><Home/><SideChat/></div>)} />
						</Switch>
					</Router>
		    </div>
			</div>
		);
	}
}

export default App;
