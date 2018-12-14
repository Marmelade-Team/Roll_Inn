import React, { Component } from 'react';
import './style/cardPlayer.scss';
import GameCardContainer from '../../containers/gameCardContainer'

class CardPlayer extends Component {
    render() {
            
        return (
            <GameCardContainer className="cardPlayer"
                    id={this.props.card.id}
                    name={this.props.card.name}
                    icon="user"
                    card={this.props.card}>
                oui
            </GameCardContainer>
        );
    }
}

export default CardPlayer;
