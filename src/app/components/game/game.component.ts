import * as angular from 'angular';
import { GameService } from '../../services/game.service';
import { CardType } from '../../../types';

class GameController {
  $scope: any;
  gameContainer: any;
  cards: CardType[];
  moves: number;

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

  flipCard(card: any) {
    this.moves++;
    card.flipped = !card.flipped;

    setTimeout(() => {
      let result: CardType[] = this.gameService.checkForMatch(card);
      if (result !== undefined && result !== null) {
        this.cards = angular.copy(result);
        this.$scope.$apply(this.cards);
      }
    }, 1500);
  }

  startGame() {
    this.clearBoard();
    this.gameService.startGame()
      .then((data: { moves: number, cards: CardType[]}) => {
        this.cards = data.cards;
        this.moves = data.moves;
        this.$scope.$apply(this.cards);
      });
  }
};

GameController.$inject = ['$scope', 'gameService'];

export const Game: angular.IComponentOptions = {
  template: require('./game.component.html'),
  controller: GameController
};
