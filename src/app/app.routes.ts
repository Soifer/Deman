import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';

import { NoContent } from './projects/common/components/no-content';
import { GridComponent } from './projects/common/components/grid.component';




export const ROUTES: Routes = [
  { path: 'grid', component: GridComponent, pathMatch: 'full' },
  { path: 'grid/:service', component: GridComponent },
  { path: '', component: NoContent }
];
