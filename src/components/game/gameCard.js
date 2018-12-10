import React, { Component } from 'react';
import './style/gameCard.scss';

class GameCard extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }
  

  render() {

    const backgroundPicture = {
        backgroundImage : "url(" +this.props.bg+ ")"
    };
      
    return (
        <div className="card" style = {backgroundPicture}>
            <div className="titleCard" >
                <h1>{this.props.title}</h1>
            </div>
            <div className="contentCard">
                <textarea></textarea>
            </div>
        </div>
    );
  }
}

export default GameCard;
