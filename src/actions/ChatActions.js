import dispatcher from '../dispatcher';
import { generateResponse, generateNewUser, generateNewChat } from '../utils/chatHelper';

export const CHAT_CONSTANTS = {
  ADD_USER : 'ADD_USER',
  ADD_CHAT : 'ADD_CHAT',
  SELECT_CHAT : 'SELECT_CHAT',
  CLOSE_NOTIFICATION: 'CLOSE_NOTIFICATION',
  REPLY_NOTIFICATION: 'REPLY_NOTIFICATION',
};

export const ChatActionCreators = {
  replyNotification: (username) => ({
    type: CHAT_CONSTANTS.REPLY_NOTIFICATION,
    payload: username
  }),
  closeNotification: () => ({
    type: CHAT_CONSTANTS.CLOSE_NOTIFICATION
  }),
  selectChat: (username) => ({
      type: CHAT_CONSTANTS.SELECT_CHAT,
      payload: username
  }),
  addChat: (message, currentChat) => ({
    type: CHAT_CONSTANTS.ADD_CHAT,
    payload: message,
    currentChat
  }),
  addUser: (username) => ({
      type: CHAT_CONSTANTS.ADD_USER,
      payload: username
  }),
  externalMessage: (user) => (dispatch, state) => {
    generateResponse(user).then((m) => {
      dispatch({
          type: CHAT_CONSTANTS.ADD_CHAT,
          payload: m,
          currentChat: user
      });
    });
  },
  addExternalUser: () => (dispatch, state) => {
    generateNewUser().then((u) => {
      dispatch({
          type: CHAT_CONSTANTS.ADD_USER,
          payload: u
      });
    });
  },
  generateChat: () => (dispatch, state) => {
    generateNewChat().then((m) => {
      if (!state.messageList[m.userName])
        dispatch({
            type: CHAT_CONSTANTS.ADD_USER,
            payload: m.userName
        });
      dispatch({
          type: CHAT_CONSTANTS.ADD_CHAT,
          payload: m,
          currentChat: m.userName
      });
    });
  }
}

export const ChatActions = {
  selectChat: (username) => {
    dispatcher.dispatch({
        type: CHAT_CONSTANTS.SELECT_CHAT,
        payload: username
    });
  },
  addChat: (message) => {
    dispatcher.dispatch({
        type: CHAT_CONSTANTS.ADD_CHAT,
        payload: message
    });
  },
  addUser: (username) => {
    dispatcher.dispatch({
        type: CHAT_CONSTANTS.ADD_USER,
        payload: username
    });
  },
  externalMessage: (user) => {
    generateResponse(user).then((m) => {
      dispatcher.dispatch({
          type: CHAT_CONSTANTS.ADD_CHAT,
          payload: m
      });
    });
  },
  addExternalUser: () => {
    generateNewUser().then((u) => {
      dispatcher.dispatch({
          type: CHAT_CONSTANTS.ADD_USER,
          payload: u
      });
    });
  },
  generateChat: () => {
    generateNewChat().then((m) => {
      dispatcher.dispatch({
          type: CHAT_CONSTANTS.ADD_CHAT,
          payload: m
      });
    });
  }
}
