import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import { CHAT_CONSTANTS } from '../actions/ChatActions';
import storage from 'key-storage';


function getStoredState() {
	var t = new Date();
	t.setSeconds(t.getSeconds() - 60);
	const lastState = storage.get('lastState');
	const lastUpdated = storage.get('lastUpdated');
	if (lastState && t.getTime() < lastUpdated) {
		return JSON.parse(lastState);
	}
	return null;
}


class ChatStore extends EventEmitter {
    constructor() {
      super();
      const lastState = getStoredState();
      if (lastState) {
        this.messageList = lastState.messageList;
        this.userList = lastState.userList;
        this.activeChat =  lastState.activeChat;
        return;
      }
      this.messageList = { 'Test1': [] };
      this.userList = [ 'Test1'];
      this.activeChat =  'Test1';
    }

		getUserNameFromList(userName) {
			let found = false;
			if (userName == "You") return true;
			this.userList.forEach((usr) => {
				if (userName == usr)
					found = true;
			});
			console.log(found);
			return found;
		}

    handleActions(action) {
			console.log(action);
      switch (action.type) {
        case CHAT_CONSTANTS.ADD_CHAT: {
					if (!this.getUserNameFromList(action.payload.userName)) {
						this.userList.push(action.payload.userName);
						this.messageList[action.payload.userName] = [];
					}
          this.messageList[action.payload.userName == "You" ? this.activeChat : action.payload.userName].push(action.payload);
          this.emit("storeUpdated");
          break;
        }
        case CHAT_CONSTANTS.ADD_USER: {
          this.userList.push(action.payload);
          this.emit("storeUpdated");
          break;
        }
        case CHAT_CONSTANTS.SELECT_CHAT: {
          this.activeChat = action.payload;
					if (!this.messageList[this.activeChat])
          	this.messageList[this.activeChat] = [];
          this.emit("storeUpdated");
          break;
        }
          default: {
        }
      }
      this.updateState();
    }

    getCurrentMessageList() {
      return this.messageList[this.activeChat];
    }

    getActiveChat() {
      return this.activeChat;
    }

    getUserList() {
      return this.userList;
    }

    updateState() {
      storage.set('lastState', JSON.stringify({
        messageList: this.messageList,
        userList: this.userList,
        activeChat: this.activeChat
      }));
      const t = new Date();
      storage.set('lastUpdated', t.getTime());
    }
}

const chatStore = new ChatStore();
dispatcher.register(chatStore.handleActions.bind(chatStore));
export default chatStore;
