import * as angular from 'angular';
import { GameService } from '../../services/game.service';
import { CardType } from '../../../types';

class GameController {
  gameContainer: any;
  cards: CardType[];
  moves: number;
  $scope: any;

  constructor (
    $scope: any,
    public gameService: GameService
  ) {
    this.$scope = $scope;
    this.cards = [];
    this.moves = 0;
  }

  clearBoard() {
    this.cards = [];
    this.moves = 0;
  }

  startGame() {
    console.log('startGame');
    this.clearBoard();
    this.gameService.startGame()
      .then((data: { moves: number, cards: CardType[]}) => {
        this.cards = data.cards;
        this.moves = data.moves;
        console.log('this.cards = ', this.cards);
        this.$scope.$apply(this.cards);
      });
  }
};

GameController.$inject = ['$scope', 'gameService'];

export const Game: angular.IComponentOptions = {
  template: require('./game.component.html'),
  controller: GameController
};
