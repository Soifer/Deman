import { Component } from '@angular/core';
import { NavBarComponent } from './Navigation/navbar.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GenreComponent } from './vod/genre.component';
import { ProgramComponent } from './vod/program.component';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
            <div class="mainContainer">
              <router-outlet></router-outlet>  
             </div>
            `,
  directives: [NavBarComponent, ROUTER_DIRECTIVES],
  precompile:[GenreComponent,ProgramComponent]

})
export class AppComponent { }