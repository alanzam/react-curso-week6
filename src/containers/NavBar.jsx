import React from 'react';
import { ChatActions } from '../actions/ChatActions';
import { connect } from 'react-redux';
import NavBarComponent from '../components/NavBar';

const mapDispatchToProps = dispatch => {
  return {
    addUser: () => {
    },
    createResponse: () => {

    }
  }
}

export default connect(null, mapDispatchToProps)(NavBarComponent);
