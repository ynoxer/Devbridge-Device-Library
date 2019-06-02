import './styles/site-styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store, history } from './store';
import Routes from './routes';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  rootElement);
