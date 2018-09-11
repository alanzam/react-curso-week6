import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
	constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
		this.createResponse = this.createResponse.bind(this);
  }

	addUser() {
		console.log("New User");
	}

	createResponse() {
		console.log("New Response");
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
