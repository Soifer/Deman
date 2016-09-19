import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { GridComponent } from './Center/Grid/grid.component';
import { GridItemComponent } from './Center/GridItem/gridItem.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: GridComponent,data:{test:"12345"} },
  { path: 'grid', component: GridComponent},
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
// , children: [{ path: '', component: GridItemComponent }] 