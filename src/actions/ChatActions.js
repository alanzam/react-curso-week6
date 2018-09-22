export function selectChat(username) {
    return {
        type: 'SELECT_CHAT',
        payload: username
    };
}

export function addChat(message, currentChat) {
    return {
        type: 'ADD_CHAT',
        payload:  {
          ...message,
          currentChat
        }
    };
}

export function addUser(username) {
    return {
        type: 'ADD_USER',
        payload: username
    };
}

export function generateChat() => (dispatch, getState) => {
    var state = getState();
    dispatch({
      type: 'ADD_CHAT',
      payload:  {
        ...message,
        currentChat
      }
    })
}
