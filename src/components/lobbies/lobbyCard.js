import React, { Component } from 'react';
import './lobbies.scss'

class LobbyCard extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div className="LobbyCard" onClick={this.props.onClick}>
        <img src={this.props.srcImg} alt={this.props.name}/>
        <span>{this.props.name}</span><br/>
        <span>{this.props.date}</span><br/>
        <span>{this.props.numberOfPlayer}/{this.props.MaxNumberOfPlayer}</span>
      </div>
    )
  }
}

export default LobbyCard;
