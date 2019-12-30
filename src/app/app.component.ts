import { Component } from '@angular/core'; //Component decorator

@Component({
  selector: 'mw-app', // Use to locate a custom html element and apply the component to (index.html)
  // Inline template
  // template: `
  //   <h1>My App</h1>
  //   <p>Keeping track of the media I want to watch.</p>
  // `

  templateUrl: './app.component.html'
})
export class AppComponent { }
