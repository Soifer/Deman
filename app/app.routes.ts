import { provideRouter, RouterConfig } from '@angular/router';
import { GenreComponent } from './vod/genre.component';
import { ProgramComponent } from './vod/program.component';


// https://angular.io/docs/ts/latest/guide/router.html
const routes: RouterConfig = [
    { path: '', component: GenreComponent },
    { path: 'genre', component: GenreComponent },
    { path: 'program', component: ProgramComponent },


];

export const appRouterProviders = [
    provideRouter(routes)
];
