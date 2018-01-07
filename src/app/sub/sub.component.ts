import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  constructor(
    @Inject('PhoneService') private phoneService: any,
    @Inject('$rootScope') private rootScope: any
    ) {
    console.debug('PhoneService', phoneService.query());
   }

  ngOnInit() {
  }

  click() {
    this.rootScope.$digest();
  }

}
