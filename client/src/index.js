// this is where we connect our react application with html file

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import './index.css';

// set up redux store. store consist of complete state tree of the application
// thunk allows you to write action creater that returns a function instead of action. used for asynchronous logic
// compose combine several store enhancers
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

const root = createRoot(document.getElementById('root'));
// we are connecting dev with the id of root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
