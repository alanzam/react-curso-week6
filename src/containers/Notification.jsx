import React from 'react';
import {connect} from 'react-redux';
import NotificationComponent from '../components/Notification';
const mapStateToProps = state => ({
	message: state.messageList[state.activeChat][0].message,
	userName: state.messageList[state.activeChat][0].userName
});

export default connect(mapStateToProps)(NotificationComponent)
