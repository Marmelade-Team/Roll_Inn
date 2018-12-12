import React, { Component } from 'react';
import './style/cardPlayer.scss';
import GameCard from './gameCard'

class CardPlayer extends Component {
    render() {
            
        return (
            <GameCard className="cardPlayer"
                    id={this.props.card.id}
                    name={this.props.card.name}
                    card={this.props.card}>
                oui
            </GameCard>
        );
    }
}

export default CardPlayer;
