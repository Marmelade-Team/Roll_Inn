import React, { Component } from 'react';
import './style/gameGrid.scss';
import GameCard from './gameCard';
import GameGridSlot from './gameGridSlot';

class GameGrid extends Component {

  updateDimensions = () => {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    if (this.props) {
      console.log(width, height, this.props.gameActions)
      this.props.gameActions.setColumns(this.props.store.columns + 1)
      this.props.gameActions.setRows(this.props.store.rows + 1)
    }
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderGridSlots() {
    var indents = [];
    for (var column = 1; column <= this.props.store.columns; column++) {
      for (var row = 1; row <= this.props.store.rows; row++) {
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
        <div className="gameGrid"
            style={{gridTemplateColumns: ('repeat(' + this.props.store.columns + ',1fr)'), gridTemplateRows: ('repeat(' + this.props.store.rows + ',1fr)')}}>
          {this.renderGridSlots()}
          <GameCard title="Adventure" bg="https://img.20mn.fr/r5SvxqSZSrWS4W587_eJxw/310x190_fond-ecran-defaut-windows-xp.jpg" />
        </div>
    );
  }
}

export default GameGrid;
