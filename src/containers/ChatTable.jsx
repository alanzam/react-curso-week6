import React from 'react';
import { connect } from 'react-redux';
import { ChatActionCreators } from '../actions/ChatActions';
import ChatTableComponent from '../components/ChatTable';

const mapStateToProps = (state) => ({
	messageList: state.messageList[state.activeChat],
	userName: state.activeChat
});

const dispatchActionToProps = (dispatch) => ({
	sendChat: (msg, currentChat) => {dispatch(ChatActionCreators.addChat(msg, currentChat))}
});

export default connect(mapStateToProps, dispatchActionToProps)(ChatTableComponent);
