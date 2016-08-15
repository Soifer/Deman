import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgControlName, ControlGroup, Control, Validators, FormBuilder} from '@angular/common';
import { IService } from './services/IService';
import { CrudBtnComponent } from '../inputs/crud-btn.component';
import { CrudBtn} from '../inputs/models/crud-btn';
import { Icon} from '../inputs/models/icon';
import { IconComponent } from '../inputs/icon.component';
import {UiEventsModel} from './models/uiEventsModel';


@Component({
    directives: [CrudBtnComponent, IconComponent]
})


export abstract class IVod<T> implements OnInit, OnDestroy {
    public listT: Array<T>;
    private sub: any;
    btnEdit = new CrudBtn("edit", "");
    btnHide = new CrudBtn("hide", "green");
    btnConfirmEdit = new CrudBtn("confirmEdit", "");
    iconAlert = new Icon("alert", "red");
    public editAnotherField: boolean = true;
    public curentEditBtn: number;
    form: ControlGroup;


    constructor(public _service: IService<T>) { }

    ngOnInit() {
        this.sub = this._service.getAll().subscribe(data => {
            this.listT = data;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBtnEdit(data: UiEventsModel) {
        if (this.editAnotherField) {
            this.curentEditBtn = data.Id;
            this.editAnotherField = false;
            data.Visible = !data.Visible;

        } else
            if (this.curentEditBtn == data.Id && this.form.valid) {
                this.editAnotherField = true;
                data.Visible = !data.Visible;
            }
    }
    onInputChange(data: UiEventsModel) {
        data.Changed = true;
    }
    onBtnConfirmEdit(data: UiEventsModel) {
        data.Changed = false;
    }

    onBtnHide(data: NgControlName) {

    }
    onTouched(test) {
        console.log(test);

    }
}
