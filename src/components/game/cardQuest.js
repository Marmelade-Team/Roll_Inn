import React, { Component } from 'react';
import './style/cardQuest.scss';
import GameCard from './gameCard'
import { CARD_TYPES } from '../../constants/game'

class CardQuest extends Component {
    render() {
            
        return (
            <GameCard
                    id={CARD_TYPES.QUEST}
                    name="Quest"
                    card={this.props.store.quest}>
                oui
            </GameCard>
        );
    }
}

export default CardQuest;
