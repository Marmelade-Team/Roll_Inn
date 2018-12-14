import React, { Component } from 'react'
import './style/gameGrid.scss'
import CardAdventureContainer from '../../containers/gameCardAdventureContainer'
import CardQuestContainer from '../../containers/gameCardQuestContainer'
import CardPlayer from './cardPlayer'
import GameGridSlot from './gameGridSlot'
import { COLUMNS, ROWS } from '../../constants/gameGridSize'

class GameGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: []
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
  
        console.log('=== === === === ===')
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

        console.log(this.props.store.resizingCard.props.card.columnStart, currentColumn)
        console.log(this.props.store.resizingCard.props.card.rowStart, currentRow)
        if (currentColumn < this.props.store.resizingCard.props.card.columnStart
            || currentRow < this.props.store.resizingCard.props.card.rowStart) {
          return
        }
        for (let columnIndex = this.props.store.resizingCard.props.card.columnStart; columnIndex < currentColumn; columnIndex++) {
          
          for (let rowIndex = this.props.store.resizingCard.props.card.rowStart; rowIndex < currentRow; rowIndex++) {
            
          }
        }
      }
    };
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderGridSlots() {
    this.state.cells = [];
    for (let column = 1; column <= this.props.store.columns; column++) {
      let newColumn = [];
      for (let row = 1; row <= this.props.store.rows; row++) {
        newColumn.push(
          <GameGridSlot
            key={column + ':' + row}
            column={column}
            row={row}/>
        );
      }
      this.state.cells.push(newColumn);
    }
    return this.state.cells;
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
