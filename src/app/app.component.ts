import { Component } from '@angular/core'; //Component decorator

@Component({
  selector: 'mw-app', // Use to locate a custom html element and apply the component to (index.html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
