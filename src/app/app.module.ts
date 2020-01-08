import { NgModule } from '@angular/core'; //NgModule decorator
import { BrowserModule } from '@angular/platform-browser'; //Contains core directives, pipes, and more for working with the DOM
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';

import { FavoriteDirective } from './favorite.directive';

import { CategoryListPipe } from './category-list.pipe';

import { lookupListToken, lookupLists } from './providers'

@NgModule({
  // Make components, directives, and pipes available to module that don't come from another module
  declarations: [
    AppComponent, 
    MediaItemComponent,
    MediaItemListComponent, 
    MediaItemFormComponent, 
    FavoriteDirective,
    CategoryListPipe
  ], 
  // Bring in other Angular modules
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ], 
  providers: [
    { provide: lookupListToken, useValue: lookupLists}
  ],
  //Forroot module + will let Angular know which components will be the starting point for the bootstrap process
  bootstrap: [
    AppComponent
  ] //app.component.ts
})
export class AppModule { }
