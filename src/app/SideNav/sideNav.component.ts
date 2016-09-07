import { Component, ViewEncapsulation,OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'sideNav',
    templateUrl: './sideNav.component.html',
    styleUrls:['sideNav.css'],

})
export class SideNavComponent implements OnInit {
    public isCollapsed: boolean = false;
    @Output() modalItemSelected = new EventEmitter();
    items = ['Genre', 'Program', 'Season', 'Episode', 'Feed'];
    constructor() { }
    ngOnInit() { }

}
