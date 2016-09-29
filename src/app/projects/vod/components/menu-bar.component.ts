import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'menu-bar',
    templateUrl: 'menu-bar.component.html',
    styleUrls: ['menu-bar.component.css']
})
export class MenuBarComponent {
    @Output() menuBarToggle = new EventEmitter();
    @Input() isCollapsed: boolean = false;

    onClick() {
        this.menuBarToggle.emit();
    }
}
