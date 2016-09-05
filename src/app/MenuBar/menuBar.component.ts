import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'menuBar',
    templateUrl: 'menuBar.component.html',
    styles:[`
            md-input{margin-right:5px;}
            .menuIcon{cursor:pointer;}
            .blue{color:red;}
            `]
})
export class MenuBarComponent implements OnInit {
    @Output() change = new EventEmitter();
    menubarIsCollapsed:boolean = false;
    constructor() { }
    onClick() {
       this.menubarIsCollapsed = !this.menubarIsCollapsed;
        this.change.emit();
    }
    ngOnInit() { }
}
