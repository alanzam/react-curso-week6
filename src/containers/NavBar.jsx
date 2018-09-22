import React from 'react';
import { generateNewUser, generateNewChat } from '../utils/chatHelper';
import { ChatActions } from '../actions/ChatActions';
import { connect } from 'react-redux';
import NavBarComponent from '../components/NavBar';

const mapDispatchToProps = dispatch => {
  return {
    createResponse: () => {
      generateNewChat().then((m) => {
        dispatch(ChatActions.addChat(m));
      });
    },
    addUser: () => {
      generateNewUser().then((u) => {
        dispatch(ChatActions.addUser(u));
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(NavBarComponent);
