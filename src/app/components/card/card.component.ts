import { GameService } from '../../services/game.service';
import { CardType } from '../../../types';

class CardController {
  card: {
    color: string;
    flipped?: boolean;
    icon: string;
    id: number;
    match: number;
};

  constructor (
    $scope: any,
    public gameService: GameService
  ) {}

}

CardController.$inject = ['$scope', 'gameService'];

export const Card: angular.IComponentOptions = {
  template: require('./card.component.html'),
  controller: CardController,
  bindings: {
    card: '<',
    flipCard: '&'
  }
};
