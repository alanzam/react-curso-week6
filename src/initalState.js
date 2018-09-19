import storage from 'key-storage';

function getStoredState() {
	var t = new Date();
	t.setSeconds(t.getSeconds() - 60);
	const lastState = storage.get('lastState');
	const lastUpdated = storage.get('lastUpdated');
	if (lastState && t.getTime() < lastUpdated) {
		return JSON.parse(lastState);
	}
	return {
    messageList: {
      'Test1': [],
      'Test2': []
    },
    activeChat: 'Test1'
  };
}

export default getStoredState();
