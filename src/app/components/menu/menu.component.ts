import { GameService } from '../../services/game.service';

class MenuController {
  moves: number;

  constructor (
    public gameService: GameService
  ) {
    this.moves = 0;
  }

  resetGame() {
    // this.resetCall();
    this.gameService.startGame();
  }
}

export const gameMenu: angular.IComponentOptions = {
  template: require('./menu.component.html'),
  controller: MenuController,
  bindings: {
    moves: '=',
    resetCall: '&'
  }
};
