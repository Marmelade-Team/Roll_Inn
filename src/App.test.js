import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './containers/gameContainer'
import LobbiesContainer from './containers/lobbiesContainer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
  ReactDOM.render(<LobbiesContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
