import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import {CrudBtn} from './models/crud-btn';
@Component({
    selector: 'crud-btn',
    templateUrl: './crud-btn.component.html',
})

export class CrudBtnComponent {
    @Input() btnType: string;
    @Input() Id: number;
    private btn: CrudBtn;
    ngOnInit() {
    this.btn.Id = this.Id;
    this.btn.Type = this.btnType;

    }
    @Output() change = new EventEmitter();
    onClick() {
        this.change.emit(CrudBtn);
    }

}