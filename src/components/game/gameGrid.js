import React, { Component } from 'react';
import './style/gameGrid.scss';
import GameCard from './gameCard';
import GameGridSlot from './gameGridSlot';

class GameGrid extends Component {
  
  componentDidMount(){
    console.log(this.props.store)
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
