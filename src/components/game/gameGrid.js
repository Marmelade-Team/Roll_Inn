import React, { Component } from 'react';
import './style/gameGrid.scss';
import GameCardAdventure from './gameCardAdventure';

class GameGrid extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div className="gameGrid">
            <GameCardAdventure />
        </div>
    );
  }
}

export default GameGrid;
