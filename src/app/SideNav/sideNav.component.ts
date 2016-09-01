import { Component, OnInit } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'sideNav',
    templateUrl: './sideNav.component.html',
    styles: ['side {width:200px;}'],
    directives: [CollapseDirective]
})
export class SideNavComponent implements OnInit {
    public isCollapsed: boolean = false;
    items = ['Genre', 'Program', 'Season', 'Episode'];
    constructor() { }

    ngOnInit() { }
}
