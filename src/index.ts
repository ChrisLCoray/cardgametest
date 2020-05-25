import * as angular from 'angular';

// import {hello} from './app/hello';
import { header } from './app/components/header/header.component';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', hello);
