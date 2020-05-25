import { copy } from 'angular';
import { CARD_DATA } from '../constants/cardSource';
import { COLOR_SOURCE } from '../constants/colorSource';
import { CardType } from '../../types';

export class GameService {
    colors = copy(COLOR_SOURCE);
    usedColors = [0, 1, 2, 3, 4, 5, 6, 7];

    createCards() {
        let cardId = 0,
        deckPlaceholder = [];

        CARD_DATA.forEach((item, index) => {
            const color = this.getColorForCard();
            const card = { color: color, flipped: 0, icon: item.icon, id: cardId++, match: item.id };
            deckPlaceholder.push(copy(card));
            card.id = cardId++;
            deckPlaceholder.push(card);
        });

        console.log('deckPlaceholder = ', deckPlaceholder);

        return this.randomizeCards(deckPlaceholder);
    }

    createTrackerArray(min: number, max: number) {
        let returnArray = [];
        for ( var i = min; i < max; i++ ) {
            returnArray.push(i);
        }
        return returnArray;
    }

    getColorForCard() {
        const randInt = Math.floor(Math.random() * Math.floor(this.colors.length));
        const color = copy(this.colors[randInt]);
        const colorIndex = this.colors.indexOf(color);
        this.colors.splice(colorIndex, 1);
        return color;
    }

    randomizeCards(cards: CardType[]) {
        let deckSize = cards.length,
            randomizedDeck = [];

        for (var i = 0; i < deckSize; i++) {
            const randCard = Math.floor(Math.random() * Math.floor(cards.length));
            const card = cards[randCard];
            if (card !== undefined) {
                const cardIndex = cards.indexOf(card);
                randomizedDeck.push(card);
                cards.splice(cardIndex, 1);
            }
        }

        return randomizedDeck;
    }

    startGame() {
        this.colors = copy(COLOR_SOURCE);
        return this.createCards();
    }
}
