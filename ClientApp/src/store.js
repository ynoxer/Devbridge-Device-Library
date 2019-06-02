import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const enhancers = compose(  
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
