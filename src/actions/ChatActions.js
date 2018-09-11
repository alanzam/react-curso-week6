import dispatcher from "../Dispatcher";

export const CHAT_ACTIONS = {
    SELECT_CHAT: 'chatActions.selectChat'
};

export function selectChat(username) {
    dispatcher.dispatch({
        type: CHAT_ACTIONS.SELECT_CHAT,
        username
    })
}
