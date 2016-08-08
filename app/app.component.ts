import { Component } from '@angular/core';
import { NavBarComponent } from './Navigation/navbar.component';
import { GenreComponent } from './Vod/genre.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
            <div class="mainContainer">
              <router-outlet></router-outlet>  
             </div>
            `,
directives:[NavBarComponent,GenreComponent,ROUTER_DIRECTIVES]
})
export class AppComponent { }