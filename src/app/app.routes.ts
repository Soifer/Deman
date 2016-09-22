import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { GridComponent } from './Center/Grid/grid.component';
import { GridItemComponent } from './Center/GridItem/gridItem.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
 // { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: GridComponent, pathMatch: 'full' },
  { path: 'grid/:id', component: GridComponent },
  { path: 'detail', loadChildren: () => System.import('./+detail') },
  { path: '', component: NoContent }
];
