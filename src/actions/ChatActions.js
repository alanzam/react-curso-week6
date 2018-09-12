import dispatcher from '../dispatcher';

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
