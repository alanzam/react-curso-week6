const error = store => next => action => {
  try {
    return next(action);
  }
  catch (err) {
    console.error(err);
    return store.getState();
  }
}

export default error;
