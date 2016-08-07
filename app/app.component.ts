import { Component } from '@angular/core';
import { NavBarComponent } from './Navigation/navbar.component';
import { GenreComponent } from './Vod/genre.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<navbar></navbar>
             <h1>My First Angular 2 App</h1>
             <router-outlet></router-outlet>  
            `,
directives:[NavBarComponent,GenreComponent,ROUTER_DIRECTIVES]
})
export class AppComponent { }