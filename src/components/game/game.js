import React, { Component } from 'react';
import './style/game.css';

class Game extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div className="container">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
        </div>
    );
  }
}

export default Game;
