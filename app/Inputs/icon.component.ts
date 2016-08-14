import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Icon} from './models/icon';
@Component({
    selector: 'icon',
    templateUrl: 'app/inputs/icon.component.html',
})

export class IconComponent {
    @Input() icon: Icon;
    @Output() change = new EventEmitter();
 

    ngOnInit() {

    }

    onClick() {
        this.change.emit(this.icon);
    }

}