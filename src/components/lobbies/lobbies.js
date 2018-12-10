import React, { Component } from 'react';
import './lobbies.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LobbyCard from './lobbyCard'
import Button from '../ui/button'
import SearchBar from '../ui/searchBar'
import ButtonGroup from '../ui/buttonGroup';

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
  
  filterSortUp(sort){
    this.props.lobbiesActions.setSort(sort)
  }

  renderFilterBar(){
    return(
      <div className="FilterBar">
        <ButtonGroup className="warning sm m-l-sm m-t-xs m-b-xs">
          <Button onClick={() => this.filterName()}>
            Name
          </Button>
          <Button onClick={() => this.filterDate()}>
            Date
          </Button>
          <Button onClick={() => this.filterPlayers()}>
            Players
          </Button>
        </ButtonGroup>
        <ButtonGroup className="m-t-xs m-b-xs">
          <Button onClick={() => this.filterPublic('public')}>
            Public
          </Button>
          <Button className="success" onClick={() => this.filterPublic('private')}>
            Private
          </Button>
        </ButtonGroup>
        <div className="pull-right">
          <ButtonGroup>
            <Button onClick={() => this.filterUp('up')}>
              <FontAwesomeIcon icon="sort-amount-up" />
            </Button>
            <Button onClick={() => this.filterUp('down')}>
              <FontAwesomeIcon icon="sort-amount-down" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="Lobbies">
        <SearchBar/>
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
