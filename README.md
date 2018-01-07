# AngularJS 1.x + Angular (2+) Hybrid using ngUpgrade Lite

The boilerplate for using ngUpgrade Lite can be generated with [Nx](https://nrwl.io/nx) as an so called AngularJS Downgrade Module. For this, I've created a new Angular Project with the CLI using ``ng new ...`` and after switching to its folder I've used the following commands:

```
npm i @types/angular --save-dev
npm i @angular/upgrade --save
npm i @nrwl/schematics --save-dev

ng generate downgrade-module legacyApp --collection @nrwl/schematics 
```

## Differences to NgUpgrade "classic"

[This post](https://www.softwarearchitekt.at/post/2016/11/15/using-ngupgrade-with-aot-to-optimize-performane.aspx) shows how to use the [AOT-aware NgUpgrade "classic"](https://www.softwarearchitekt.at/post/2016/11/15/using-ngupgrade-with-aot-to-optimize-performane.aspx).

Other than the "classic" version, the lite version does not automatically trigger the AngularJS 1.x change detection b/c it turned out that this can lead to hybrid apps with bad performance. Instead of this we have to trigger it by ourselves.

Also, we have to bootstrap AngularJS 1.x first and to reference the downgraded Angular (2+) main module. Moreover, When downgrading an Angular (2+) component we have to set ``propagateDigest`` to ``false``:

```typescript
const dgSubModule = angular
  .module('sub', [])
  .directive('appSub', downgradeComponent({ component: SubComponent, propagateDigest: false }))
  .factory('subService', downgradeInjectable(SubService));

const downgraded = angular
  .module('downgraded', [downgradeModule(bootstrapAngular), dgSubModule.name])
  .directive('appRoot', downgradeComponent({ component: AppComponent, propagateDigest: false }));

angular.bootstrap(document, ['phonecatApp', downgraded.name]);
```

More Infos can be found [in the Nx documentation](https://nrwl.io/nx/guide-angularjs-downgrade-module) and in the current repo (e. g. see ``src/app/main.ts`` for bootstrapping or ``src/app/sub/sub.component.ts`` for triggering the $digest).

## Experimental

This sample was created with Angular 5.x and at this time ngUpgrade Lite was marked as "experimental".