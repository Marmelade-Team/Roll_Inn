import React, { Component } from 'react';
import './style/cardQuest.scss';
import GameCardContainer from '../../containers/gameCardContainer'
import { CARD_TYPES } from '../../constants/game'

class CardQuest extends Component {
    render() {
            
        return (
            <GameCardContainer className="cardQuest"
                    id={CARD_TYPES.QUEST}
                    name="Quest"
                    icon="scroll"
                    card={this.props.store.quest}>
                oui
            </GameCardContainer>
        );
    }
}

export default CardQuest;
