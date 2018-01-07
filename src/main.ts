import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//import * as angular from 'angular';
import { downgradeComponent, downgradeModule, downgradeInjectable, setAngularLib } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import 'legacy-app';
import { AppComponent } from './app/app.component';
import { SubComponent } from "./app/sub/sub.component";
import { SubService } from "./app/sub/sub.service";

const angular: any = window['angular'];

export function bootstrapAngular(extra: StaticProvider[]): any {
  setAngularLib(angular);
  if (environment.production) {
    enableProdMode();
  }
  return platformBrowserDynamic(extra)
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
}

const dgSubModule = angular
  .module('sub', [])
  .directive('appSub', downgradeComponent({ component: SubComponent, propagateDigest: false }))
  .factory('subService', downgradeInjectable(SubService));

const downgraded = angular
  .module('downgraded', [downgradeModule(bootstrapAngular), dgSubModule.name])
  .directive('appRoot', downgradeComponent({ component: AppComponent, propagateDigest: false }));

angular.bootstrap(document, ['phonecatApp', downgraded.name]);

// Sub-Module von AppModule ?
// Downgrade Service
// Upgrade Component
// Upgrade Service