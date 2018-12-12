import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style/gameCard.scss';

class GameCard extends Component {

    state = {
        resizing: false
    };

    switchResizing() {
        console.log("lol")
        this.setState({ resizing: !this.state.resizing })
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
                    {this.props.name}
                </div>
                <div className="cardContent">
                    {this.props.children}
                </div>
                <div className={"resize-box " + (this.state.resizing ? 'active' : '')}
                        onClick={() => this.switchResizing()}>
                    <FontAwesomeIcon icon="arrows-alt-h" size="sm"/>
                </div>
            </div>
        );
    }
}

export default GameCard;
