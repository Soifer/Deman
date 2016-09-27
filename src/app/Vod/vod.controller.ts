import { GridComponent } from '../Center/Grid/grid.component';
import { MenuBarComponent } from '../MenuBar/menuBar.component';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'vodController',
    template: `<menuBar (toggleSideNav)="isCollapsed=!isCollapsed;"></menuBar>   
               <router-outlet></router-outlet>`
})
export class VodController implements OnInit, OnDestroy {
    routeSubscriber: Subscription;
    @Input() isCollapsed: boolean;
    service: any;

    constructor(public route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.routeSubscriber = this.route.data.subscribe(params => {
            this.service = params['item'];
            if (this.service != null) {
                //this.router.navigateByUrl('../Center/Grid');
                console.log(this.service);

            }
        });
    }

    ngOnDestroy() {
        this.routeSubscriber.unsubscribe();
    }
}

export enum VodItems {
    Genre,
    Program,
    Season,
    Episode
}
