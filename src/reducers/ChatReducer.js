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

function getNewMessageList(oldMessageList, message, currentChat) {
  const activeChat = message.userName == "You" ? currentChat : message.userName;
  let newMessageList = {}
  newMessageList[activeChat] = oldMessageList[activeChat] ? [ ...oldMessageList[activeChat], message ] : [ message ];
  return Object.assign({}, oldMessageList, newMessageList);
}

function generateNewChat(oldMessageList, newChat) {
  let newMessageList = {}
  newMessageList[newChat] = oldMessageList[newChat] ? [ ...oldMessageList[newChat] ] : [];
  return Object.assign({}, oldMessageList, newMessageList);
}

function getNewUserList(oldList, user) {
  let userList = [ ...oldList ];
  if (!getUserNameFromList(user, oldList))
    userList.push(user);
  return userList;
}

export default (state = initState, action) => {
  switch (action.type) {
    case CHAT_CONSTANTS.ADD_CHAT: {
      return Object.assign({}, state
        , { messageList: getNewMessageList(state.messageList, action.payload, state.activeChat) }
        , { userList: getNewUserList(state.userList, action.payload.userName) });
    }
    case CHAT_CONSTANTS.ADD_USER: {
      return Object.assign({}, state, { userList: getNewUserList(state.userList, action.payload) });
    }
    case CHAT_CONSTANTS.SELECT_USER: {
      return Object.assign({}, state
        , { messageList: generateNewChat(state.messageList, action.payload) }
        , { activeChat : action.payload } );
    }
    default:
      return state
  }
}
