import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { ChatActionCreators } from '../actions/ChatActions';
import ChatTableComponent from '../components/ChatTable';

const mapStateToProps = (state, ownProps) => {
	const params = ownProps.match.params;
		return {
		messageList: state.messageList[params.userName],
		userName: params.userName
	}
};

const dispatchActionToProps = (dispatch) => ({
	sendChat: (msg, currentChat) => {dispatch(ChatActionCreators.addChat(msg, currentChat))}
});

export default withRouter(connect(mapStateToProps, dispatchActionToProps)(ChatTableComponent));
