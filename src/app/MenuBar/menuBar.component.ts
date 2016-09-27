import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'menuBar',
    templateUrl: 'menuBar.component.html',
    styleUrls: ['menuBar.css']
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
