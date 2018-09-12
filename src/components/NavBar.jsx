import React from 'react';
import PropTypes from 'prop-types';
import { generateNewUser, generateResponse  } from '../utils/chatHelper';
import { addChat, addUser } from '../actions/ChatActions';

class NavBar extends React.Component {
	constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
		this.createResponse = this.createResponse.bind(this);
  }

	addUser() {
		generateNewUser().then((u) => {
			addUser(u);
		})
	}

	createResponse() {
		generateResponse(this.props.userName).then((m) => {
			addChat(m);
		})
	}

	render() {
		return (
			<nav>
			  <div className="nav-wrapper red darken-1">
			    <a className="brand-logo right">React Chat</a>
			    <ul id="nav-mobile" className="left hide-on-med-and-down">
			      <li><a onClick={this.addUser}>Generar Nuevo Usuario</a></li>
			      <li><a onClick={this.createResponse}>Enviar Mensaje Chat</a></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}


export default NavBar;
