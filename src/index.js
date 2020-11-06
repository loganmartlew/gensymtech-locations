import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addLocation } from './actions/locations';
import uuid from 'react-uuid';

const store = configureStore();
store.subscribe(() => {});

const place = {
  name: 'yo',
  dimension: 0,
  portal: true,
  posO: { x: 4, y: 8 },
  posN: { x: undefined, y: undefined },
  id: uuid(),
};

store.dispatch(addLocation(place));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
