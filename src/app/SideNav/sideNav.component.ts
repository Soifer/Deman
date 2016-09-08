import { Component, ViewEncapsulation,OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'sideNav',
    templateUrl: './sideNav.component.html',
    styleUrls:['sideNav.css'],

})
export class SideNavComponent {
    @Input() isCollapsed : boolean;
    isListCollapsed = true;
    @Output() modalItemSelected = new EventEmitter();
    items = ['Genre', 'Program', 'Season', 'Episode', 'Feed'];
    constructor() { }

}
