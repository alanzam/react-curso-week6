import React from 'react';
import { ChatActions } from '../actions/ChatActions';
import { connect } from 'react-redux';
import SideChat from '../components/SideChat';

const mapStateToProps = state => {
  return {
    userList: state.userList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectChat: username => {
      dispatch(ChatActions.selectChat(username))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideChat);
