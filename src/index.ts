import * as $ from 'jquery';
import * as angular from 'angular';

import { App } from './app/App';
import 'angular-ui-router';
import routesConfig from './routes';

// Components
import { Card } from './app/components/card/card.component';
import { Footer } from './app/components/footer/footer.component';
import { Game } from './app/components/game/game.component';
import { GameMenu } from './app/components/menu/menu.component';
import { Header } from './app/components/header/header.component';

// Services
import { GameService } from './app/services/game.service';

// Styles
import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', App)
  .component('cardComponent', Card)
  .component('footerComponent', Footer)
  .component('headerComponent', Header)
  .component('gameComponent', Game)
  .component('gameMenuComponent', GameMenu)
  .service('gameService', GameService);
