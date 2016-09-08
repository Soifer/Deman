import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'menuBar',
    templateUrl: 'menuBar.component.html',
    styleUrls: ['menuBar.css']
})
export class MenuBarComponent implements OnInit {
    @Output() toggleSideNav = new EventEmitter();
    menubarIsCollapsed: boolean = false;
    constructor() {
     }
    onClick() {
        this.menubarIsCollapsed = !this.menubarIsCollapsed;
        console.log("menubar");
        
        this.toggleSideNav.emit();
    }
    ngOnInit() { }
}
