import { NgModule } from '@angular/core'; //NgModule decorator
import { BrowserModule } from '@angular/platform-browser'; //Contains core directives, pipes, and more for working with the DOM

import { AppComponent } from './app.component';

@NgModule({
  // Make components, directives, and pipes available to module that don't come from another module
  declarations: [
    AppComponent
  ], 
  // Bring in other Angular modules
  imports: [
    BrowserModule
  ], 
  providers: [],
  //Forroot module + will let Angular know which components will be the starting point for the bootstrap process
  bootstrap: [
    AppComponent
  ] //app.component.ts
})
export class AppModule { }
