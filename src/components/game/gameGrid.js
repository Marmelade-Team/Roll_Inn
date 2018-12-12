import React, { Component } from 'react'
import './style/gameGrid.scss'
import GameCard from './gameCard'
import GameGridSlot from './gameGridSlot'
import { COLUMNS, ROWS } from '../../constants/gameGridSize'
import { CARD_TYPES } from '../../constants/game'

class GameGrid extends Component {

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

      if (this.props.store.columns === COLUMNS.LG.count) {
        console.log(Math.ceil((x / (width - 100) * 100) / (100 / COLUMNS.LG.count)))
      } else if (this.props.store.columns === COLUMNS.MD.count) {
        console.log(Math.ceil((x / (width - 100) * 100) / (100 / COLUMNS.MD.count)))
      } else {
        console.log(Math.ceil((x / width * 100) / (100 / COLUMNS.SM.count)))
      }

      if (this.props.store.rows === ROWS.LG.count) {
        console.log(Math.ceil((y / height * 100) / (100 / ROWS.LG.count)))
      } else if (this.props.store.rows === ROWS.MD.count) {
        console.log(Math.ceil((y / height * 100) / (100 / ROWS.MD.count)))
      } else {
        console.log(Math.ceil((y / height * 100) / (100 / ROWS.SM.count)))
      }
    };
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderGridSlots() {
    let indents = [];
    for (let column = 1; column <= this.props.store.columns; column++) {
      for (let row = 1; row <= this.props.store.rows; row++) {
        indents.push(
          <GameGridSlot
            key={column + ':' + row}
            column={column}
            row={row}/>
        );
      }
    }
    return indents;
  }

  render() {
    return (
        <div className={"gameGrid columns-" + this.props.store.columns + " rows-" + this.props.store.rows}>
          {this.renderGridSlots()}
          <GameCard name="Adventure"
            id={CARD_TYPES.ADVENTURE}
            img={this.props.store.adventure.img}
            hide={this.props.store.quest.hide}
            columnStart={this.props.store.adventure.columnStart}
            columnEnd={this.props.store.adventure.columnEnd}
            rowStart={this.props.store.adventure.rowStart}
            rowEnd={this.props.store.adventure.rowEnd}/>
          <GameCard name="Quest"
            id={CARD_TYPES.QUEST}
            img={this.props.store.quest.img}
            hide={this.props.store.quest.hide}
            columnStart={this.props.store.quest.columnStart}
            columnEnd={this.props.store.quest.columnEnd}
            rowStart={this.props.store.quest.rowStart}
            rowEnd={this.props.store.quest.rowEnd}/>
          {(this.props.store.players || []).map ((item) => {
            return(
              <GameCard name={item.name}
                key={item.id}
                id={item.id}
                img={item.img}
                hide={item.hide}
                columnStart={item.columnStart}
                columnEnd={item.columnEnd}
                rowStart={item.rowStart}
                rowEnd={item.rowEnd}/>
            )
          })}
        </div>
    );
  }
}

export default GameGrid;
