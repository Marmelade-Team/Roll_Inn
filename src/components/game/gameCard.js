import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/gameCard.scss';

class GameCard extends Component {

    switchResizing() {
        if (this.props.store.resizingCard === this) {
            this.props.gameActions.setResizingCard(null)
            return
        }
        this.props.gameActions.setResizingCard(this)
    };

    render() {

        var cardStyle = {
            backgroundImage : 'url(' + this.props.card.img + ')',
            gridColumn: this.props.card.columnStart + '/' + (this.props.card.columnEnd + 1),
            gridRow: this.props.card.rowStart + '/' + (this.props.card.rowEnd + 1)
        }
            
        return (
            <div className={"gameCard " + (this.props.card.hide ? 'hide ' : '') + this.props.className} style={cardStyle}>
                <div className="cardName">
                    {this.props.icon}
                    {this.props.name}
                </div>
                <div className="cardContent">
                    {this.props.children}
                </div>
                <div className={"resize-box " + (this.props.store.resizingCard === this ? 'active' : '')}
                        onClick={() => this.switchResizing()}>
                    <FontAwesomeIcon icon="arrows-alt-h" size="sm"/>
                </div>
            </div>
        );
    }
}

export default GameCard;
