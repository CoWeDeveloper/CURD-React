import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // throgh provider we could able to access its child component from any where
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import  reducers from './reducers';


const store = createStore(reducers, compose(applyMiddleware(thunk)))
// after connecting were reducers our application is connected to store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
