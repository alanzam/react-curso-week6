import React from 'react';
import { connect } from 'react-redux';
import { generateChat, addExternalUser } from '../actions/ChatActions';
import NavBarComponent from '../components/NavBar';
const mapStateToProps = state => ({
	messageList: state.messageList,
	userName: state.activeChat
});

const mapDispatchToProps = dispatch => ({
	createResponse: () => dispatch(generateChat()),
  addUser: () => dispatch(addExternalUser())
});

export default connect(mapStateToProps,mapDispatchToProps)(NavBarComponent)
