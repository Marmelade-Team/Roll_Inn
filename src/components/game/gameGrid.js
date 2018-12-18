import React, { Component } from 'react'
import './style/gameGrid.scss'
import CardAdventureContainer from '../../containers/gameCardAdventureContainer'
import CardQuestContainer from '../../containers/gameCardQuestContainer'
import CardPlayer from './cardPlayer'
import GameGridSlot from './gameGridSlot'
import { COLUMNS, ROWS } from '../../constants/gameGridSize'
import { CARD_TYPES } from '../../constants/game'

class GameGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      cellsHovering: null
    };
  }

  updateDimensions = () => {
    let w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    if (width >= COLUMNS.LG.width) {
      this.props.gameActions.setColumns(COLUMNS.LG.count)
    } else if (width >= COLUMNS.MD.width) {
      this.props.gameActions.setColumns(COLUMNS.MD.count)
    } else {
      this.props.gameActions.setColumns(COLUMNS.SM.count)
    }

    if (height >= ROWS.LG.height) {
      this.props.gameActions.setRows(ROWS.LG.count)
    } else if (height >= ROWS.MD.height) {
      this.props.gameActions.setRows(ROWS.MD.count)
    } else {
      this.props.gameActions.setRows(ROWS.SM.count)
    }
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);

    document.onmousemove = e => {
      if (this.props.store.resizingCard !== null) {
        let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;
  
        e = e || window.event
        let x = e.clientX
        let y = e.clientY
        
        let currentColumn = 0;
        let currentRow = 0;
  
        if (this.props.store.columns === COLUMNS.LG.count) {
          currentColumn = Math.ceil((x / (width - 100) * 100) / (100 / COLUMNS.LG.count))
        } else if (this.props.store.columns === COLUMNS.MD.count) {
          currentColumn = Math.ceil((x / (width - 100) * 100) / (100 / COLUMNS.MD.count))
        } else {
          currentColumn = Math.ceil((x / width * 100) / (100 / COLUMNS.SM.count))
        }
  
        if (this.props.store.rows === ROWS.LG.count) {
          currentRow = Math.ceil((y / height * 100) / (100 / ROWS.LG.count))
        } else if (this.props.store.rows === ROWS.MD.count) {
          currentRow= Math.ceil((y / height * 100) / (100 / ROWS.MD.count))
        } else {
          currentRow = Math.ceil((y / height * 100) / (100 / ROWS.SM.count))
        }
        
        if (currentColumn < this.props.store.resizingCard.props.card.columnStart
            || currentRow < this.props.store.resizingCard.props.card.rowStart
            || currentColumn > this.props.store.columns
            || currentRow > this.props.store.rows) {
          return
        }
        
        let cellsHoveringCopy = this.state.cellsHovering
        for (let columnIndex = 1; columnIndex <= this.props.store.columns; columnIndex++) {
          for (let rowIndex = 1; rowIndex <= this.props.store.rows; rowIndex++) {
            cellsHoveringCopy[columnIndex][rowIndex] = false
          }
        }
        for (let columnIndex = this.props.store.resizingCard.props.card.columnStart; columnIndex <= currentColumn; columnIndex++) {
          for (let rowIndex = this.props.store.resizingCard.props.card.rowStart; rowIndex <= currentRow; rowIndex++) {
            cellsHoveringCopy[columnIndex][rowIndex] = true
          }
        }
        this.setState({ cellsHovering: cellsHoveringCopy })
      }
    };
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  isHovering(column, row) {
    return column >= this.props.store.resizingCard.props.card.columnStart
        && row >= this.props.store.resizingCard.props.card.rowStart
        && column <= this.state.currentColumn
        && row <= this.state.currentRow
  }

  hoveringClick(column, row) {
    if (!this.props.store.resizingCard) {
      return
    }
    console.log(this.props.store.resizingCard, this.props.store.resizingCard.props.id)
    if (this.props.store.resizingCard.props.id === CARD_TYPES.QUEST) {
      this.props.store.quest.columnEnd = column
      this.props.store.quest.rowEnd = row
    } else if (this.props.store.resizingCard.props.id === CARD_TYPES.ADVENTURE) {
      this.props.store.adventure.columnEnd = column
      this.props.store.adventure.rowEnd = row
    } else if (this.props.store.resizingCard.props.id === CARD_TYPES.PLAYERS) {
      this.props.store.players[this.props.store.resizingCard.props.playerId].columnEnd = column
      this.props.store.players[this.props.store.resizingCard.props.playerId].rowEnd = row
    }
  }

  renderGridSlots() {
    if (!this.state.cellsHovering || Object.keys(this.state.cellsHovering).length !== this.props.store.columns) {
      this.state.cellsHovering = {}
      for (let column = 1; column <= this.props.store.columns; column++) {
        let newColumnHovering = {}
        for (let row = 1; row <= this.props.store.rows; row++) {
          newColumnHovering[row] = false
        }
        this.state.cellsHovering[column] = newColumnHovering
      }
    }

    this.state.cells = []
    for (let column = 1; column <= this.props.store.columns; column++) {
      let newColumn = []
      for (let row = 1; row <= this.props.store.rows; row++) {
        newColumn.push(
          <GameGridSlot
            key={column + ':' + row}
            column={column}
            row={row}
            hovering={this.state.cellsHovering[column][row]}
            onClick={() => this.hoveringClick(column, row)}/>
        );
      }
      this.state.cells.push(newColumn)
    }

    return this.state.cells
  }

  render() {
    return (
        <div className={"gameGrid columns-" + this.props.store.columns + " rows-" + this.props.store.rows}>
          {this.renderGridSlots()}
          <CardAdventureContainer/>
          <CardQuestContainer/>
          {(this.props.store.players || []).map ((item) => {
            return(
              <CardPlayer
                key={item.id}
                card={item}/>
            )
          })}
        </div>
    );
  }
}

export default GameGrid;
