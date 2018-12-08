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
    public : true,
    img: `https://i.imgur.com/YQ499qE.jpg`
  },
  {
    gameId: `ceedzed`,
    date : 15442891953,
    name : `Le champ des damnés  2`,
    playerMax : 5,
    playerNumber : 2,
    public : false,
    img: `https://i.imgur.com/1GYwaQG.jpg`
  }
]
const dateToString = date => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
class Lobbies extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  clickCard(index){
    console.log(index)
  }

  renderFilterBar(){
    return(
      <div className='FilterBar'>
        <Button text='Name' className='filter'/> <Button text='Date' className='filter'/>
      </div>
    )
  }

  render() {
    return (
      <div className="Lobbies">
      {this.renderFilterBar()}
      {fakeDonnee.map ((item , index) => {
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
