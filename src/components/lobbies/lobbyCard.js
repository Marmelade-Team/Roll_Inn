import React, { Component } from 'react';
import './lobbyCard.scss'

class LobbyCard extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div className="LobbyCard" onClick={this.props.onClick}>
        <div>
          <img src={this.props.srcImg} alt={this.props.name}/>
        </div>
        <div>
          <div>{this.props.name}</div>
          <div>{this.props.store.style}</div>
          <div>{this.props.date}</div>
        </div>
        <div>
          <div>{this.props.numberOfPlayer}/{this.props.MaxNumberOfPlayer}</div>
        </div>
      </div>
    )
  }
}

export default LobbyCard;
