

export const logger = store => next => action => {
  console.group(action.type);
  console.log('OLD STATE', store.getState());
  let result = next(action);
  console.log('NEW STATE', store.getState());
  console.groupEnd();
  return result;
}
