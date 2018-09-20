import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { ChatActionCreators } from '../actions/ChatActions';
import SideChatComponent from '../components/SideChat';

const mapStateToProps = (state) => ({
	userList: Object.keys(state.messageList)
});

const dispatchActionToProps = (dispatch) => ({
	selectChat: (usr) => {dispatch(ChatActionCreators.selectChat(usr))}
});

export default connect(mapStateToProps, dispatchActionToProps)(SideChatComponent);
