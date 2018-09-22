import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import initialState from './initialState';

const messageList = (state = fromJS(initialState.messageList), action) => {
  switch (action.type) {
    case 'ADD_CHAT': {
      return state.updateIn(action.payload.currentChat, (arr) => {
        if (!arr)
          arr = [];
        arr.push(action.payload);
      });
    }
    default:
      return state
  }
}

const userList = (state = initialState.userList, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      state.push(action.payload);
      return state;
    }
    default:
      return state
  }
}

const activeChat = (state = initialState.activeChat, action) => {
  switch (action.type) {
    case 'SELECT_CHAT':
      return action.payload;
    default:
      return state
  }
}

export default combineReducers({
  messageList,
  userList,
  activeChat
})
