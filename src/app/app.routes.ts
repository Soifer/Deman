import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**', component: NoContent },
  // { path: '', component: GenreComponent },
  // { path: 'genre', component: GenreComponent },
  // { path: 'program', component: ProgramComponent },
  // { path: 'season', component: SeasonComponent },
  // { path: 'episode', component: SeasonComponent }
];
