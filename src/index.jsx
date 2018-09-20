import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/ChatReducer';
import initialState from './initalState';
import logger from './middlewares/logger';
import error from './middlewares/error';
import thunk from './middlewares/thunk';
import localStorage from './middlewares/localStorage';
import App from './App';

const store = createStore(reducer, initialState, applyMiddleware(thunk, error, logger, localStorage));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('myApp')
);
