import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GenreComponent } from '../Vod/genre.component';
import { ProgramComponent } from '../Vod/program.component';
import { SeasonComponent } from '../Vod/season.component';
import { EpisodeComponent } from '../Vod/episode.component';

@Component({
    selector: 'navbar',
    templateUrl: 'app/Navigation/navbar.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [ProgramComponent, GenreComponent, SeasonComponent, EpisodeComponent]
})

export class NavBarComponent { }