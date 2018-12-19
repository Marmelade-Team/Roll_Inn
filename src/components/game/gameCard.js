import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/gameCard.scss';

class GameCard extends Component {

    cardClick(e) {
        e.stopPropagation()
        if (this.props.store.resizingCard === this) {
            this.props.gameActions.setResizingCard(null)
        }
        this.props.onClick()
    }

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
            <div className={"gameCard " + (this.props.card.hide ? 'hide ' : '') + this.props.className}
                    style={cardStyle}
                    onClick={e => this.cardClick(e)}>
                <div className="cardName">
                    {this.props.icon &&
                        <FontAwesomeIcon icon={this.props.icon} className="m-r-sm"/>
                    }
                    {this.props.name}
                    <div className="closeIcon pull-right">
                        <FontAwesomeIcon icon="times"/>
                    </div>
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
