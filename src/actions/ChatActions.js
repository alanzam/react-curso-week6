import { generateResponse, generateNewUser, generateNewChat } from '../utils/chatHelper';

export const CHAT_CONSTANTS = {
  ADD_USER : 'ADD_USER',
  ADD_CHAT : 'ADD_CHAT',
  SELECT_USER : 'SELECT_USER'
};

export const ChatActions = {
  selectChat: (username) => ({
      type: CHAT_CONSTANTS.SELECT_USER,
      payload: username
  }),
  addChat: (message) => ({
      type: CHAT_CONSTANTS.ADD_CHAT,
      payload: message
  }),
  addUser: (username) => ({
      type: CHAT_CONSTANTS.ADD_USER,
      payload: username
  }),
  // externalMessage: (user) => {
  //   generateResponse(user).then((m) => {
  //     dispatcher.dispatch({
  //         type: CHAT_CONSTANTS.ADD_CHAT,
  //         payload: m
  //     });
  //   });
  // },
  // addExternalUser: () => {
  //   generateNewUser().then((u) => {
  //     dispatcher.dispatch({
  //         type: CHAT_CONSTANTS.ADD_USER,
  //         payload: u
  //     });
  //   });
  // },
  // generateChat: () => {
  //   generateNewChat().then((m) => {
  //     dispatcher.dispatch({
  //         type: CHAT_CONSTANTS.ADD_CHAT,
  //         payload: m
  //     });
  //   });
  // }
}
