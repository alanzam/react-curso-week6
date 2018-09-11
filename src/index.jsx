import React from 'react';
import { render } from 'react-dom';
import App from './App';

global.eventHub = new EventEmitter();

render(
  <App />,
  document.getElementById('myApp')
);
