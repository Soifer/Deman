import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sideNav',
    templateUrl: './sideNav.component.html',
    styles: ['side {width:200px;}'],

})
export class SideNavComponent implements OnInit {
    public isCollapsed: boolean = false;
    items = ['Genre', 'Program', 'Season', 'Episode'];
    constructor() { }

    ngOnInit() { }
}
