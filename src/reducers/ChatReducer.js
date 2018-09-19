import { CHAT_CONSTANTS } from '../actions/ChatActions';
import { combineReducers } from 'redux';


const MessageListReducer = (state = null, action ) => {
  switch (action.type) {
    case CHAT_CONSTANTS.ADD_CHAT: {
      if (action.payload.message == "x")
        throw new Error(action.payload.message);
      let newMessageObject = {};
      newMessageObject[action.currentChat] = [ ...state[action.currentChat], action.payload ];
      return Object.assign({}, state, newMessageObject);
    }
    case CHAT_CONSTANTS.ADD_USER: {
      let newMessageObject = {};
      newMessageObject[action.payload] = [ ];
      return Object.assign({}, state, newMessageObject);
    }
    default:
      return state;
  }
}

const ActiveChatReducer = (state = null, action ) => {
  switch (action.type) {
    case CHAT_CONSTANTS.SELECT_CHAT: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default combineReducers({
  messageList: MessageListReducer,
  activeChat: ActiveChatReducer
});
