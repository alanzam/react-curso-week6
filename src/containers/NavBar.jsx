import React from 'react';
import { connect } from 'react-redux';
import { ChatActionCreators } from '../actions/ChatActions';
import NavBarComponent from '../components/NavBar';

const dispatchActionToProps = (dispatch) => ({
	addUser: () => {dispatch(ChatActionCreators.addExternalUser())},
  createResponse: () => {dispatch(ChatActionCreators.generateChat())}
});

export default connect(null, dispatchActionToProps)(NavBarComponent);
