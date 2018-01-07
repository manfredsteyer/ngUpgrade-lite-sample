import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubModule } from "./sub/sub.module";
import { SubComponent } from "./sub/sub.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  ngDoBootstrap(): void {}
}
