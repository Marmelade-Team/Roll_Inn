import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Game from '../components/game/game';
import configureStore from '../store/store';
import '../config/fontAwesome';

it('Render Game', () => {
  let div = document.createElement('div');
  ReactDOM.render(<Provider store={configureStore()}><Game/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
