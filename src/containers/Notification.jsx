import React from 'react';
import { connect } from 'react-redux';
import { ChatActionCreators } from '../actions/ChatActions';
import NotificationComponent from '../components/Notification';

const mapStateToProps = (state) => ({
	isOpen: state.notification.isOpen && state.notification.userName != state.activeChat,
	userName: state.notification.userName,
  message: state.notification.message
});

const dispatchActionToProps = (dispatch) => ({
	closeNotification: () => {dispatch(ChatActionCreators.closeNotification())},
  replyNotification: (username) => {dispatch(ChatActionCreators.replyNotification(username))}
});

export default connect(mapStateToProps, dispatchActionToProps)(NotificationComponent);
