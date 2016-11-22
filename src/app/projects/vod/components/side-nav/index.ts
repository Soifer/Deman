import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav.component';
import { CommonModule } from '@angular/common';

export const MENU_ROUTES: Routes = [
    { path: '', component: SideNavComponent, outlet:'side' }
];

@NgModule({
    imports: [RouterModule.forChild(MENU_ROUTES), CommonModule],
    declarations: [SideNavComponent]
})
export class SideNavModule { }