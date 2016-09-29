import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';

import { NoContent } from './projects/common/components/no-content';
import { GridComponent } from './projects/common/components/grid.component';
import { VodController } from './projects/vod/components/vod-controller.component';

export const ROUTES: Routes = [
  { path: 'vod/:service', component: VodController },
  { path: 'grid', component: GridComponent },
  { path: '', component: NoContent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
