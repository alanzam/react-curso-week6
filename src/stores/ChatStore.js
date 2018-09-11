import dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';
import * as ChatActions from '../actions/ChatActions';

class ChatStore extends EventEmitter {
    constructor() {
      super();
      this.activeChat = '';
    }

    handleActions(action) {
      switch (action.type) {
        case ChatActions.CHAT_ACTIONS.SELECT_CHAT: {
          this.activeChat = action.username;
          this.emit("storeUpdated");
          break;
        }
          default: {
        }
      }
    }

    getActiveChat() {
      return this.activeChat;
    }
}

const chatStore = new ChatStore();
dispatcher.register(chatStore.handleActions.bind(chatStore));
export default chatStore;
