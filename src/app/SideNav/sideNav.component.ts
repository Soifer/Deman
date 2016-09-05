import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sideNav',
    templateUrl: './sideNav.component.html',
    styles: [`
              side {width:200px;}
              .sideNavItemHeader{min-width:120px;text-align:center;cursor:pointer;}
            `]
})
export class SideNavComponent implements OnInit {
    public isCollapsed: boolean = false;
    items = ['Genre', 'Program', 'Season', 'Episode', 'Feed'];
    constructor() { }
    ngOnInit() { }
}
