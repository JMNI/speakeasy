import ReactDOM from 'react-dom';
import React from 'react'
import App from './src/components/app.js'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../public/src/reducers';
// import './index.css';
// import { makeMainRoutes } from './routes';

// const routes = makeMainRoutes();
//the reducers gets put into the store to provide redux store / state info?
const createStoreWithMiddleware = applyMiddleware()(createStore);
console.log("createStore in index.js",createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
