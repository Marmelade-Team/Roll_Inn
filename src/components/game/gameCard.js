import React, { Component } from 'react';
import './style/gameCard.scss';

class GameCard extends Component {
  

  componentDidMount(){
    console.log(this.props)
  }
  

  render() {

    const backgroundPicture = {
        backgroundImage : "url(" +this.props.bg+ ")",
        backgroundSize: 'cover',
 
    };
      
    return (
        <div className="card" style = {backgroundPicture}>
            <div className="titleCard" >
                {this.props.title}
            </div>
            <div className="contentCard">
                <textarea></textarea>
            </div>
        </div>
    );
  }
}

export default GameCard;
