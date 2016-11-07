import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs/Rx';

import { OperationOrder } from '../../models/operation-orders';

@Component({
    selector: 'menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: ['menu-bar.component.css']
})
export class MenuBarComponent implements OnInit, OnDestroy {
    @Output() menuBarToggle = new EventEmitter();
    @Input() isCollapsed: boolean = false;
    @Input() subject: BehaviorSubject<OperationOrder[]>;

    private _orders: OperationOrder[] = [];
    private _sub: Subscription;

    onClick() {
        this.menuBarToggle.emit();
    }
    onSearch(name) {
        console.log('pressed ' + JSON.stringify(name));
    }
    ngOnInit() {
        console.log('menu Init');

        this._sub = this.subject.subscribe(data => {
            this._orders = data;
        });
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

}
