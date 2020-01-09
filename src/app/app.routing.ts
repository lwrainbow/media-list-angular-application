import { Routes, RouterModule } from '@angular/router';
import { MediaItemListComponent } from './media-item-list.component';

// use the first matched one
const appRoutes: Routes = [
  { path: ':medium', component: MediaItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);