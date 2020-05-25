import * as angular from 'angular';
import { GameService } from '../../services/game.service';
import { CardType } from '../../../types';

class GameController {
  gameContainer: any;
  cards: CardType[];
  moves: number;

  constructor (
    $document: any,
    $scope: any,
    public gameService: GameService
  ) {
    this.gameContainer = document.getElementById('game-area');
    console.log('this.gameContainer = ', this.gameContainer);
    this.moves = 0;
  }

  clearBoard() {
    this.gameContainer.innerHtml = '';
  }

  startGame() {
    // this.clearBoard();
    this.cards = this.gameService.startGame();
    console.log('this.cards = ', this.cards);
  }
};

export const Game: angular.IComponentOptions = {
  template: require('./game.component.html'),
  controller: GameController
};
