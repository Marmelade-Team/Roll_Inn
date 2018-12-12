import React, { Component } from 'react';
import './style/cardAdventure.scss';
import GameCard from './gameCard'
import { CARD_TYPES } from '../../constants/game'

class cardAdventure extends Component {
    render() {
            
        return (
            <GameCard
                    id={CARD_TYPES.ADVENTURE}
                    name="Adventure"
                    card={this.props.store.adventure}>
                oui
            </GameCard>
        );
    }
}

export default cardAdventure;
