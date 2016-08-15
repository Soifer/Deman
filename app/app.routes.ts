import { provideRouter, RouterConfig } from '@angular/router';
import { GenreComponent } from './vod/genre.component';
import { ProgramComponent } from './vod/program.component';
import { SeasonComponent } from './vod/season.component';
import { EpisodeComponent } from './vod/episode.component';

// https://angular.io/docs/ts/latest/guide/router.html
const routes: RouterConfig = [
    { path: '', component: GenreComponent },
    { path: 'genre', component: GenreComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'season', component: SeasonComponent },
    { path: 'episode', component: SeasonComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
