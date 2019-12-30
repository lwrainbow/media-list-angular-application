import { Component } from '@angular/core'; //Component decorator

@Component({
  selector: 'mw-app', // Use to locate a custom html element and apply the component to (index.html)
  // Inline template
  // template: `
  //   <h1>My App</h1>
  //   <p>Keeping track of the media I want to watch.</p>
  // `

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {

  }
}
