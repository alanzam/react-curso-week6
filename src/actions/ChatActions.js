import dispatcher from '../dispatcher';
import { generateResponse, generateNewUser, generateNewChat } from '../utils/chatHelper';

export const CHAT_CONSTANTS = {
  ADD_USER : 'ADD_USER',
  ADD_CHAT : 'ADD_CHAT',
  SELECT_CHAT : 'SELECT_CHAT'
};

export const ChatActionCreators = {
  selectChat: (username) => ({
      type: CHAT_CONSTANTS.SELECT_CHAT,
      payload: username
  }),
  addChat: (message) => (dispatch, state) => {
    dispatch({
      type: CHAT_CONSTANTS.ADD_CHAT,
      payload: message,
      currentChat: state.activeChat
    });
  },
  addUser: (username) => ({
      type: CHAT_CONSTANTS.ADD_USER,
      payload: username
  }),
  externalMessage: (user) => (dispatch, state) => {
    generateResponse(user).then((m) => {
      dispatch({
          type: CHAT_CONSTANTS.ADD_CHAT,
          payload: m,
          currentChat: state.activeChat
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
