import { GameService } from '../../services/game.service';

class MenuController {
  moves: number;

  constructor (
    public gameService: GameService
  ) {

  }

  resetGame() {
    // this.resetCall();
    this.gameService.startGame();
  }
}

export const GameMenu: angular.IComponentOptions = {
  template: require('./menu.component.html'),
  controller: MenuController,
  bindings: {
    moves: '=',
    resetCall: '&'
  }
};
