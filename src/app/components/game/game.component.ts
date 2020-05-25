import { GameService } from '../../services/game.service';

class GameController {
  constructor (
    public gameService: GameService
  ) {

  }
}

export const game: angular.IComponentOptions = {
  template: require('./game.component.html'),
  controller: GameController,
  bindings: {
    moves: '='
  }
};
