import { provideRouter, RouterConfig } from '@angular/router';
import { GenreComponent } from './vod/genre.component';


// https://angular.io/docs/ts/latest/guide/router.html
const routes: RouterConfig = [
    { path: '', component: GenreComponent },
    { path: 'genre', component: GenreComponent },


];

export const appRouterProviders = [
    provideRouter(routes)
];
