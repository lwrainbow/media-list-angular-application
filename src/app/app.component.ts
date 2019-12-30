import { Component } from '@angular/core'; //Component decorator

@Component({
  selector: 'app-root', // Use to locate a custom html element and apply the component to (index.html)
  template: '<h1>My App</h1>'
})
export class AppComponent { }
