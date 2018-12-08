import React, { Component } from 'react';
import './lobbies.scss'
import LobbyCard from './lobbyCard'
import Button from '../ui/button'

const fakeDonnee = [
  {
    gameId: `vFfCHOCuIwHTKGKQYzlB`,
    date : 1544289281,
    name : `Le champ des damnés`,
    playerMax : 5,
    playerNumber : 3,
    locked : true,
    img: `https://i.imgur.com/YQ499qE.jpg`
  },
  {
    gameId: `ceedzed`,
    date : 15442891953,
    name : `Le champ des damnés  2`,
    playerMax : 5,
    playerNumber : 2,
    locked : false,
    img: `https://i.imgur.com/1GYwaQG.jpg`
  }
]
const dateToString = date => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
class Lobbies extends Component {

  componentWillMount(){
    this.props.lobbies.lobbies = fakeDonnee
  }

  componentDidMount(){
    console.log(this.props)
  }

  clickCard(index){
    console.log(index)
  }

  filterName(){
    this.props.lobbiesActions.setFilter('Name')
  }

  filterDate(){
    this.props.lobbiesActions.setFilter('Date')
  }

  filterPlayers(){
    this.props.lobbiesActions.setFilter('Players')
  }

  filterPublic(locked){
    this.props.lobbiesActions.setLocked(locked)
  }

  renderFilterBar(){
    return(
      <div className='FilterBar'>
        <Button text='Name' className='filter' onClick={() => this.filterName()}/>
        <Button text='Date' className='filter' onClick={() => this.filterDate()}/>
        <Button text='Players' className='filter' onClick={() => this.filterPlayers()}/>
        <Button text='Public' className='filter' onClick={() => this.filterPublic(true)}/>
        <Button text='Private' className='filter' onClick={() => this.filterPublic(false)}/>
      </div>
    )
  }

  render() {
    return (
      <div className="Lobbies">
      {this.renderFilterBar()}
      {((this.props.lobbies.lobbies && this.props.lobbies.lobbies) || []).map ((item , index) => {
        return(
          <LobbyCard
            key={item+index}
            srcImg={item.img}
            className="card"
            public = {item.public}
            name={item.name}
            date={dateToString(new Date(item.date))}
            numberOfPlayer = {item.playerNumber}
            MaxNumberOfPlayer = {item.playerMax}
            onClick = {() => this.clickCard(index)}/>
        )
      })}
      </div>
    )
  }
}

export default Lobbies;
