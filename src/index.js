import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './components/home/home';
import Game from './components/game/game';
import LobbiesContainer from './containers/lobbiesContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store/store';
import './config/fontAwesome';

ReactDOM.render(
   <Provider store={configureStore()}>
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/lobbies" component={LobbiesContainer} />
            </React.Fragment>
        </Router>
   </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
