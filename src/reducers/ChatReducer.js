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
    case CHAT_CONSTANTS.REPLY_NOTIFICATION:
    case CHAT_CONSTANTS.SELECT_CHAT: {
      return action.payload;
    }
    default:
      return state;
  }
}

const NotificationReducer = (state = { isOpen: false, userName: '', message: '' }, action ) => {
  switch (action.type) {
    case CHAT_CONSTANTS.ADD_CHAT: {
      if (action.payload.userName == "You") return state;
      return Object.assign({}, state, action.payload, { isOpen: true });
    }
    case CHAT_CONSTANTS.REPLY_NOTIFICATION:
    case CHAT_CONSTANTS.CLOSE_NOTIFICATION: {
      return Object.assign({}, state, { isOpen: false });
    }
    default:
      return state;
  }
}

export default combineReducers({
  messageList: MessageListReducer,
  activeChat: ActiveChatReducer,
  notification: NotificationReducer
});
