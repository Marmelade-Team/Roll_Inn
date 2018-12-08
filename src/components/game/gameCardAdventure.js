import React, { Component } from 'react';
import './style/gameCardAdventure.scss';

class GameCardAdventure extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
        <div className="card">
            <div className="titleCard">
                <h1>Adventure</h1>
            </div>
            <div className="contentCard">
                <textarea></textarea>
            </div>
        </div>
    );
  }
}

export default GameCardAdventure;
