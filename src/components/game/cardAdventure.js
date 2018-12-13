import React, { Component } from 'react';
import './style/cardAdventure.scss';
import GameCardContainer from '../../containers/gameCardContainer'
import { CARD_TYPES } from '../../constants/game'

class CardAdventure extends Component {
    render() {
            
        return (
            <GameCardContainer className="cardAdventure"
                    id={CARD_TYPES.ADVENTURE}
                    name="Adventure"
                    card={this.props.store.adventure}>
                oui
            </GameCardContainer>
        );
    }
}

export default CardAdventure;
