import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.css'],

})
export class SideNavComponent {
    isListCollapsed = true;
    @Output() sideNavToggle = new EventEmitter();
    items = [
        { name: 'Genre', path: '/vod/genre' },
        { name: 'Program', path: '/vod/program' },
        { name: 'Season', path: '/vod/season' },
        { name: 'Episode', path: '/vod/episode' },
        { name: 'Feed', path: '/sidenav(other:sidenav)' }
    ];
    onClose() {
        this.sideNavToggle.emit();
    }
    constructor() { }

}
