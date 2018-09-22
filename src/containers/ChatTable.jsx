import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/ChatActions';
import ChatTableComponent from '../components/ChatTable';

const mapStateToProps = state => {
	console.log(state);
	return {
	messageList: state.messageList.getIn([state.activeChat]),
	userName: state.activeChat
};
}


const mapDispatchToProps = dispatch => ({
	sendChat: msg => dispatch(Actions.addChat(msg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatTableComponent)
