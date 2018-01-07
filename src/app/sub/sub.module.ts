import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub.component';
import { SubService } from "./sub.service";
import { UpgradeComponent } from "@angular/upgrade/static";
import { UpgradedAngularJsComponent } from "./upgraded-angularjs.directive";

export function createPhoneService(injector) {
  return injector.get('Phone');
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SubComponent,
    UpgradedAngularJsComponent
  ],
  entryComponents: [SubComponent],
  providers: [
    SubService,
    {
      provide: 'PhoneService',
      useFactory: createPhoneService,
      deps: ['$injector']
    }

  ]  
  //exports: [SubComponent]
}) 
export class SubModule { }