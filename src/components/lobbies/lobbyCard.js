import React, { Component } from 'react';
import './lobbyCard.scss'

class LobbyCard extends Component {

  render() {
    return (
      <div className={"LobbyCard " + this.props.store.style}
          onClick={this.props.onClick}>
        <div className="imageContainer">
          <img src={this.props.srcImg} alt={this.props.name}/>
        </div>
        <div className="cardContext p-h-xs">
          <div className="cardText text-overflow-hide">
            <div className="push-bottom text-overflow-hide">{this.props.name}</div>
            <div className="push-top text-overflow-hide">{this.props.date}</div>
          </div>
          <div className="filler"></div>
          <div className="cardText">
            <div className="push-bottom">LOCK</div>
            <div className="push-top">
              {this.props.numberOfPlayer}/{this.props.MaxNumberOfPlayer}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LobbyCard;
