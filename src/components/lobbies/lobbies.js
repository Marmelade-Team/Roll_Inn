import React, { Component } from 'react';
import './lobbies.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LobbyCardContainer from '../../containers/lobbyCard'
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
  },
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
    this.props.store.lobbies = fakeDonnee
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
  
  filterSort(sort){
    this.props.lobbiesActions.setSort(sort)
  }

  filteStyle(style){
    this.props.lobbiesActions.setStyle(style)
  }

  renderFilterBar(){
    return(
      <div className="FilterBar m-b-lg">
        <div className="m-t-xs m-h-sm">
          <ButtonGroup className="warning m-b-xs m-r-xs">
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
          <ButtonGroup  className="m-b-xs">
            <Button onClick={() => this.filterPublic('public')}>
              Public
            </Button>
            <Button className="success" onClick={() => this.filterPublic('private')}>
              Private
            </Button>
          </ButtonGroup>
        </div>
        <div className="filler"></div>
        <div className="m-t-xs m-h-sm">
          <ButtonGroup className="m-b-xs">
            <Button onClick={() => this.filterSort('up')}>
              <FontAwesomeIcon icon="sort-amount-up" />
            </Button>
            <Button onClick={() => this.filterSort('down')}>
              <FontAwesomeIcon icon="sort-amount-down" />
            </Button>
          </ButtonGroup>
          <ButtonGroup  className="m-b-xs m-l-xs">
            <Button onClick={() => this.filteStyle('list')}>
              <FontAwesomeIcon icon="list" />
            </Button>
            <Button onClick={() => this.filteStyle('grid')}>
              <FontAwesomeIcon icon="th" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="Lobbies p-v-lg">
        <SearchBar className="m-b-lg"/>
        {this.renderFilterBar()}
        <div className={"lobbyCardBlock " + this.props.store.style}>
          {((this.props.store.lobbies && this.props.store.lobbies) || []).map ((item , index) => {
            return(
              <LobbyCardContainer
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
      </div>
    )
  }
}

export default Lobbies;
