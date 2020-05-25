import { GameService } from '../../services/game.service';
import { CardType } from '../../../types';

class CardController {
  card: CardType[];
  moves: number;

  constructor (
    public gameService: GameService
  ) {
    console.log('this.card = ', this.card);
  }
}

export const Card: angular.IComponentOptions = {
  template: require('./card.component.html'),
  controller: CardController,
  bindings: {
    card: '<'
  }
};
