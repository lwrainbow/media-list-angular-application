import { NgModule } from '@angular/core'; //NgModule decorator
import { BrowserModule } from '@angular/platform-browser'; //Contains core directives, pipes, and more for working with the DOM
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { NewItemModule } from './new-item/new-item.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupListToken, lookupLists } from './providers'
import { MockXHRBackend } from './mock-xhr-backend';

@NgModule({
  // Make components, directives, and pipes available to module that don't come from another module
  declarations: [
    AppComponent, 
    MediaItemComponent,
    MediaItemListComponent, 
    FavoriteDirective,
    CategoryListPipe
  ], 
  // Bring in other Angular modules
  imports: [
    BrowserModule,
    HttpClientModule,
    NewItemModule,
    routing
  ], 
  providers: [
    { provide: lookupListToken, useValue: lookupLists }, 
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  //Forroot module + will let Angular know which components will be the starting point for the bootstrap process
  bootstrap: [
    AppComponent
  ] //app.component.ts
})
export class AppModule { }
