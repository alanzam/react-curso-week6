import React from 'react';
import ChatTableComponent from '../components/ChatTable';
import { ChatActions } from '../actions/ChatActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    messageList: state.messageList[state.activeChat],
		userName: state.activeChat
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendChat: message => {
      dispatch(ChatActions.addChat(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatTableComponent);
