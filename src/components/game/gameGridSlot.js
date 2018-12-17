import React, { Component } from 'react'
import './style/gameGridSlot.scss'

class GameGridSlot extends Component {
  
    render() {
        return (
            <div className={"gridSlot " + (this.props.hovering ? "hovering " : "") + this.props.className}
                style={{gridColumn: this.props.column, gridRow: this.props.row}}>
            </div>
        );
    }
}

export default GameGridSlot;
