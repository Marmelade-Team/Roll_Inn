import React, { Component } from 'react';
import './style/cardPlayer.scss';
import GameCardContainer from '../../containers/gameCardContainer'
import { CARD_TYPES } from '../../constants/game'

class CardPlayer extends Component {
    render() {
            
        return (
            <GameCardContainer className="cardPlayer"
                    id={CARD_TYPES.PLAYERS}
                    playerId={this.props.playerId}
                    name={this.props.card.name}
                    icon="user"
                    card={this.props.card}
                    onClick={this.props.onClick}>
                oui
            </GameCardContainer>
        );
    }
}

export default CardPlayer;
