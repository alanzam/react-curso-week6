import dispatcher from '../dispatcher';
import { generateResponse, generateNewUser, generateNewChat } from '../utils/chatHelper';

export function selectChat(username) {
    dispatcher.dispatch({
        type: 'SELECT_CHAT',
        payload: username
    });
}

export function addChat(message) {
    dispatcher.dispatch({
        type: 'ADD_CHAT',
        payload: message
    });
}

export function addUser(username) {
    dispatcher.dispatch({
        type: 'ADD_USER',
        payload: username
    });
}

export function externalMessage(user) {
  generateResponse(user).then((m) => {
    addChat(m);
  });
}

export function addExternalUser() {
  generateNewUser().then((u) => {
    addUser(u);
  });
}

export function generateChat() {
  generateNewChat().then((m) => {
    addChat(m);
  });
}
