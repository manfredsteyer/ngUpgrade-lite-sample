import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({
  selector: 'upgraded-angularjs-component'
})
export class UpgradedAngularJsComponent extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    super('angularJsComponent', elementRef, injector);
}


}