import { CHAT_CONSTANTS } from '../actions/ChatActions';
import initState from '../initialState';

function getUserNameFromList(userName, userList) {
  let found = false;
  if (userName == "You") return true;
  userList.forEach((usr) => {
    if (userName == usr)
      found = true;
  });
  return found;
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHAT_CONSTANTS.ADD_CHAT: {
      let newState = state;
      if (!getUserNameFromList(action.payload.userName, newState.userList)) {
        let newMessageList = Object.assign({}, ...newState.messageList);
        newMessageList[action.payload.userName] = [];
        newState = Object.assign({}, newState,
                    { userList: [ ...newState.userList, action.payload.userName] },
                    { messageList: Object.assign({}, ...newMessageList)  }
                   );
      }
      let messageList = {};
      let activeChat = action.payload.userName == "You" ? state.activeChat : action.payload.userName;
      messageList[activeChat] = [ ...newState.messageList[activeChat], action.payload ];
      newState = Object.assign({}, newState, { messageList: Object.assign({}, newState.messageList , messageList) } );
      return newState;
    }
    case CHAT_CONSTANTS.ADD_USER: {
      return Object.assign({}, state, { userList: [ ...state.userList, action.payload] });
    }
    case CHAT_CONSTANTS.SELECT_USER: {
      let newState = state;
      let messageList = {};
      messageList[action.payload] = newState.messageList[action.payload] ? [ ...newState.messageList[action.payload] ] : [];
      newState = Object.assign({}, newState, { messageList: Object.assign({}, newState.messageList, messageList) }, { activeChat : action.payload } );
      return newState;
    }
    default:
      return state
  }
}
