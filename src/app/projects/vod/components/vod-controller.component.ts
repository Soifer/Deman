import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ReflectiveInjector } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Constants } from '../../common/Constants';
import { GridComponent } from '../../common/components/grid.component';
import { MenuBarComponent } from './menu-bar.component';
import { VodServices } from '../../common/Enums';

import { GenreService } from '../services/genre.service';
import { ProgramService } from '../services/program.service';
import { SeasonService } from '../services/season.service';
import { EpisodeService } from '../services/episode.service';
@Component({
    selector: 'vod-controller',
    templateUrl: './vod-controller.component.html'
})
export class VodController implements OnInit, OnDestroy {
    routeSubscriber: Subscription;
    @Output() menuBarToggle = new EventEmitter();
    @Input() isCollapsed: boolean;

    constructor(public route: ActivatedRoute, private _router: Router) {
    }

    ngOnInit() {
        this.routeSubscriber = this.route.params.subscribe(params => {
            let service = params[Constants.SERVICE_KEY];
            if (service != null) {
                console.log('vod: ' + service);
                this._router.navigate(['/grid', { service: VodServices[VodServices[service]], search: 'abc' }]).then(_ => {
                    console.log('passed ok');

                });
            }
        });
    }

    ngOnDestroy() {
        this.routeSubscriber.unsubscribe();
    }
    onToggle() {
        this.menuBarToggle.emit();
    }
    createInjectors() {

    }
}

export enum VodItems {
    Genre,
    Program,
    Season,
    Episode
}
