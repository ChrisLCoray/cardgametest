import { ISCEService } from 'angular';
import { GameService } from '../../services/game.service';
import { Card } from '../../../types';

class GameController {
  cards: Card[];
  moves: number;

  constructor (
    private $sce: ISCEService,
    public gameService: GameService
  ) {
    this.moves = 0;
  }

  printCards() {
    return true; // temp for testing
  }
}

export const Game: angular.IComponentOptions = {
  template: require('./game.component.html'),
  controller: GameController
};
