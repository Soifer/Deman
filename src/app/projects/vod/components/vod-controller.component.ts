import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ReflectiveInjector } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, BehaviorSubject } from 'rxjs/Rx';

import { Constants } from '../../common/Constants';
import { GridComponent } from '../../common/components/grid/grid.component';
import { MenuBarComponent } from './menu-bar.component';
import { VodServices } from '../../common/Enums';
import { OperationOrder } from '../models/operation-orders';
@Component({
    selector: 'vod-controller',
    templateUrl: './vod-controller.component.html'
})
export class VodController implements OnInit, OnDestroy {
    routeSubscriber: Subscription;
    @Output() menuBarToggle = new EventEmitter();
    @Input() isCollapsed: boolean;
    subject: BehaviorSubject<OperationOrder[]>;

    constructor(public route: ActivatedRoute, private _router: Router) {
        this.subject = new BehaviorSubject([{ filterName: 'Genre', filterValue: '', isSelected: true }]);
    }

    ngOnInit() {
        this.routeSubscriber = this.route.params.subscribe(params => {
            let service = params[Constants.SERVICE_KEY];
            if (service != null) {
                console.log('vod: ' + service);
                this._router
                    .navigate(['/grid', { service: VodServices[VodServices[service]], search: 'abc' }])
                    .then(_ => {
                        console.log('passed ok');
                    });
            }
            let nextOrders: OperationOrder[] = [];
            nextOrders.push({ filterName: 'Genre', filterValue: '', isSelected: true });
            nextOrders.push({ filterName: 'Program', filterValue: '', isSelected: true });
            nextOrders.push({ filterName: 'Season', filterValue: '', isSelected: true });
            let i = nextOrders.push({ filterName: 'Episode', filterValue: '', isSelected: true });

            this.subject.next(nextOrders);
            console.log('subject fired with ' + i + ' items');
        });
    }
    ngOnDestroy() {
        this.routeSubscriber.unsubscribe();
    }
    onToggle() {
        this.menuBarToggle.emit();
    }
}
