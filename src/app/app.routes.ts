import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from './app.resolver';

import { NoContent } from './projects/common/components/no-content';
import { GridComponent } from './projects/common/components/grid/grid.component';
import { VodController } from './projects/vod/components/vod-controller/vod-controller.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'vod/:service', component: VodController },
      { path: 'grid', component: GridComponent },
      { path: '', component: NoContent, pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
