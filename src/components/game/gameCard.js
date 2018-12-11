import React, { Component } from 'react';
import './style/gameCard.scss';

class GameCard extends Component {

  render() {

    var cardStyle = {
        backgroundImage : 'url(' + this.props.img + ')',
        gridColumn: this.props.columnStart + '/' + (this.props.columnEnd + 1),
        gridRow: this.props.rowStart + '/' + (this.props.rowEnd + 1)
    };
      
    return (
        <div className={"gameCard " + (this.props.hide ? 'hide' : '')} style={cardStyle}>
            <div className="cardName">
                {this.props.name}
            </div>
            <div className="cardContent">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default GameCard;
