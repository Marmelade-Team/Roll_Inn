import React, { Component } from 'react'
import './lobbies.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LobbyCardContainer from '../../containers/lobbyCard'
import Button from '../ui/button'
import SearchBar from '../ui/searchBar'
import ButtonGroup from '../ui/buttonGroup'
import { FILTERS, LOCK, SORT, STYLE } from '../../constants/lobbiesFilter'

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

  setFilter(filter){
    if (filter === this.props.store.filter) {
      this.props.lobbiesActions.setFilter(null)
      return
    }
    this.props.lobbiesActions.setFilter(filter)
  }

  setLocked(locked){
    if (locked === this.props.store.locked) {
      this.props.lobbiesActions.setLocked(null)
      return
    }
    this.props.lobbiesActions.setLocked(locked)
  }
  
  setSort(sort){
    this.props.lobbiesActions.setSort(sort)
  }

  setStyle(style){
    this.props.lobbiesActions.setStyle(style)
  }

  renderFilterBar(){
    return(
      <div className="FilterBar m-b-lg">
        <div className="m-t-xs m-h-sm">
          <ButtonGroup className="warning m-b-xs m-r-xs">
            <Button onClick={() => this.setFilter(FILTERS.NAME)}
                className={this.props.store.filter === FILTERS.NAME ? 'active' : ''}>
              Name
            </Button>
            <Button onClick={() => this.setFilter(FILTERS.DATE)}
                className={this.props.store.filter === FILTERS.DATE ? 'active' : ''}>
              Date
            </Button>
            <Button onClick={() => this.setFilter(FILTERS.PLAYERS)}
                className={this.props.store.filter === FILTERS.PLAYERS ? 'active' : ''}>
              Players
            </Button>
          </ButtonGroup>
          <ButtonGroup className="m-b-xs">
            <Button onClick={() => this.setLocked(LOCK.PUBLIC)}
                className={this.props.store.locked === LOCK.PUBLIC ? 'active' : ''}>
              Public
            </Button>
            <Button onClick={() => this.setLocked(LOCK.PRIVATE)}
                className={this.props.store.locked === LOCK.PRIVATE ? 'active' : ''}>
              Private
            </Button>
          </ButtonGroup>
        </div>
        <div className="filler"></div>
        <div className="m-t-xs m-h-sm">
          <ButtonGroup className="m-b-xs">
            <Button onClick={() => this.setSort(SORT.UP)}
                className={this.props.store.sort === SORT.UP ? 'active' : ''}>
              <FontAwesomeIcon icon="sort-amount-up"/>
            </Button>
            <Button onClick={() => this.setSort(SORT.DOWN)}
                className={this.props.store.sort === SORT.DOWN ? 'active' : ''}>
              <FontAwesomeIcon icon="sort-amount-down"/>
            </Button>
          </ButtonGroup>
          <ButtonGroup  className="m-b-xs m-l-xs">
            <Button onClick={() => this.setStyle(STYLE.LIST)}
                className={this.props.store.style === STYLE.LIST ? 'active' : ''}>
              <FontAwesomeIcon icon="list"/>
            </Button>
            <Button onClick={() => this.setStyle(STYLE.GRID)}
                className={this.props.store.style === STYLE.GRID}
                className={this.props.store.style === STYLE.GRID ? 'active' : ''}>
              <FontAwesomeIcon icon="th"/>
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
