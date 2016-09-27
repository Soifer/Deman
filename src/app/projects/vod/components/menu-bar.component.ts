import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: ['menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
    @Output() menuBarToggle = new EventEmitter();
    @Input() isCollapsed: boolean = false;
    constructor() {
     }
    onClick() {
        this.menuBarToggle.emit();
    }
    ngOnInit() { }
}
