import React, { Component } from 'react';
import './style/gameGrid.scss';

class GameGrid extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div className="gameGrid">
            <div className="block">Un</div>
        </div>
    );
  }
}

export default GameGrid;
