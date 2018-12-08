import React, { Component } from 'react';
import './style/game.css';

class Game extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div class="wrapper">
            <div class="one">Un</div>
            <div class="two">Deux</div>
            <div class="three">Trois</div>
            <div class="four">Quatre</div>
            <div class="five">Cinq</div>
            <div class="six">Six</div>
        </div>
    );
  }
}

export default Game;
