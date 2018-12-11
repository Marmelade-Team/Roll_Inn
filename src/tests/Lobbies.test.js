import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LobbiesContainer from '../containers/lobbiesContainer';
import configureStore from '../store/store';
import '../config/fontAwesome';

it('Render Lobbies', () => {
  let div = document.createElement('div');
  ReactDOM.render(<Provider store={configureStore()}><LobbiesContainer/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
