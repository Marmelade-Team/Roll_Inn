import React, { Component } from 'react';
import './style/game.scss';
import GameMenu from './gameMenu';
import GameGrid from './gameGrid';

class Game extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div className="game">
          <GameGrid />
          <GameMenu />
        </div>
    );
  }
}

export default Game;
