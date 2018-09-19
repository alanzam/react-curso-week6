import storage from 'key-storage';

function updateState(state) {
  storage.set('lastState', JSON.stringify(state));
  const t = new Date();
  storage.set('lastUpdated', t.getTime());
}

const localStorage = store => next => action => {
  let result = next(action);
  updateState(store.getState());
  return result;
}

export default localStorage;
