# AngularJS 1.x + Angular (2+) Hybrid using ngUpgrade Lite

Boilerplate was generated with [Nx](https://nrwl.io/nx) as an AngularJS Downgrade Module:

```
npm i @types/angular --save-dev
npm i @angular/upgrade --save
npm i @nrwl/schematics --save-dev

ng generate downgrade-module legacyApp --collection @nrwl/schematics 
```

## Differences to NgUpgrade "classic"

[This post](https://www.softwarearchitekt.at/post/2016/11/15/using-ngupgrade-with-aot-to-optimize-performane.aspx) shows how to use the [AOT-aware NgUpgrade "classic"](https://www.softwarearchitekt.at/post/2016/11/15/using-ngupgrade-with-aot-to-optimize-performane.aspx).

Other than the "classic" version, the lite version does not automatically trigger the AngularJS 1.x change detection b/c it turned out that this can lead to hybrid apps with bad performance. Instead of this we have to trigger it by ourselves. Also, we have to bootstrap AngularJS 1.x first and reference a the downgraded Angular (2+) main module. More Infos can be found [here](https://nrwl.io/nx/guide-angularjs-downgrade-module) and in this repo (e. g. see ``src/app/main.ts`` for bootstrapping or ``src/app/sub/sub.component.ts`` for triggering the $digest).

## Experimental

This sample was created with Angular 5.x and at this time ngUpgrade Lite was marked as "experimental".