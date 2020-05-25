import { CARD_DATA } from '../constants/cardSource';
import { COLOR_SOURCE } from '../constants/colorSource';
import { Card } from '../../types';

export class GameService {
    colors = COLOR_SOURCE;
    usedColors = [0, 1, 2, 3, 4, 5, 6, 7];

    createCards() {
        let deckPlaceholder = [];

        CARD_DATA.forEach((item) => {
            const color = this.getColorForCard();
            const card = { color: color, flipped: 0, icon: item.icon, id: item.id };
            deckPlaceholder.push(card);
            deckPlaceholder.push(card);
        });

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
        const randInt = Math.floor(Math.random() * Math.floor(this.usedColors.length));
        const colorIndex = this.usedColors.indexOf(randInt);
        this.usedColors.splice(colorIndex, 1);
        return this.colors[randInt];
    }

    randomizeCards(cards: Card[]) {
        let currentIndex = cards.length,
            randomizedDeck = [];

        for (var i = 0; i < cards.length; i++) {
            const randCard = Math.floor(Math.random() * Math.floor(cards.length));
            randomizedDeck.push(cards[randCard]);
            cards.splice(randCard, 1);
        }

        return randomizedDeck;
    }

    startGame() {
        this.usedColors = this.createTrackerArray(0,7);
        return this.createCards();
    }
}
