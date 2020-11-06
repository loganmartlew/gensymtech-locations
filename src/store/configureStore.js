/* eslint-disable import/no-anonymous-default-export */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import locationsReducer from '../reducers/locations';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({ locations: locationsReducer, filters: filtersReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
