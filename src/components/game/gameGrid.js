import React, { Component } from 'react';
import './style/gameGrid.scss';
import GameCard from './gameCard';

class GameGrid extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div className="gameGrid">
            <GameCard title="Adventure" bg="https://img.20mn.fr/r5SvxqSZSrWS4W587_eJxw/310x190_fond-ecran-defaut-windows-xp.jpg" />
        </div>
    );
  }
}

export default GameGrid;
