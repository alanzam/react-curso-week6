import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import { CHAT_CONSTANTS } from '../actions/ChatActions';
import ChatStore from './ChatStore';

class NotificationStore extends EventEmitter {
    constructor() {
      super();
      this.newMessage = {};
      this.isOpen = false;
    }

    handleActions(action) {
      switch (action.type) {
        case CHAT_CONSTANTS.ADD_CHAT: {
          if (action.payload.userName == "You") return;
          if (action.payload.userName == ChatStore.getActiveChat()) return;
          this.newMessage = action.payload;
          this.isOpen = true;
          this.emit("storeUpdated");
          break;
        }
          default: {
        }
      }
    }

    getNewMessage() {
      return this.newMessage;
    }
}

const notificationStore = new NotificationStore();
dispatcher.register(notificationStore.handleActions.bind(notificationStore));
export default notificationStore;
