import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //Bootstrapt root module on platform

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);