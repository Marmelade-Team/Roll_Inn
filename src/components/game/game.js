import React, { Component } from 'react';
import './style/game.scss';
import GameMenu from './gameMenu';
import GameGridContainer from '../../containers/gameGridContainer';

class Game extends Component {

  render() {
    return (
        <div className="game">
          <GameGridContainer/>
          <GameMenu/>
        </div>
    );
  }
}

export default Game;
