import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CrudBtn} from './models/crud-btn';
import { Genre } from '../vod/models/genre';
@Component({
    selector: 'crud-btn',
    templateUrl: 'app/buttons/crud-btn.component.html',
})

export class CrudBtnComponent {
    @Input() btn: CrudBtn;
    @Output() change = new EventEmitter();
 

    ngOnInit() {

    }

    onClick() {
        this.change.emit();
    }

}