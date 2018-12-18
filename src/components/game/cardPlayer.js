import React, { Component } from 'react';
import './style/cardPlayer.scss';
import GameCardContainer from '../../containers/gameCardContainer'
import { CARD_TYPES } from '../../constants/game'

class CardPlayer extends Component {
    render() {
            
        return (
            <GameCardContainer className="cardPlayer"
                    id={CARD_TYPES.PLAYERS}
                    playerId={this.props.card.id}
                    name={this.props.card.name}
                    icon="user"
                    card={this.props.card}>
                oui
            </GameCardContainer>
        );
    }
}

export default CardPlayer;
