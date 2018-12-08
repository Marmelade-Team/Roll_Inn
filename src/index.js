import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/appContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from './store/store';

ReactDOM.render(
   <Provider store={configureStore()}>
        <Router>
            <Route path="/" component={App} />
        </Router>
   </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
