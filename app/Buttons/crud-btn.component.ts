import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CrudBtn} from './models/crud-btn';
@Component({
    selector: 'crud-btn',
    templateUrl: './crud-btn.component.html',
})

export class CrudBtnComponent {
    @Input() Type: string = "";
    @Input() Id: number;
    @Output() change = new EventEmitter();
    public btn: CrudBtn = new CrudBtn();

    ngOnInit() {
        this.btn.Type = this.Type;
    }

    onClick() {
        this.change.emit(this.btn);
    }

}