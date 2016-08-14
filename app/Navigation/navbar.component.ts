import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GenreComponent } from '../Vod/genre.component';
import { ProgramComponent } from '../Vod/program.component';

@Component({
    selector: 'navbar',
    templateUrl: 'app/Navigation/navbar.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [ProgramComponent, GenreComponent]
})

export class NavBarComponent { }