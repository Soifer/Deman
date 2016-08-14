import {Component} from '@angular/core';
import {NgControlName, ControlGroup, Control, Validators, FormBuilder} from '@angular/common';
import { ProgramService } from './services/program.service';
import {Program} from './models/program';
import { CrudBtnComponent } from '../inputs/crud-btn.component';
import { CrudBtn} from '../inputs/models/crud-btn';
import { Icon} from '../inputs/models/icon';
import { IconComponent } from '../inputs/icon.component';
import {IVod} from './IVod.component';

@Component({
    selector: 'genre',
    templateUrl: 'app/vod/program.component.html',
    providers: [ProgramService],
    directives: [CrudBtnComponent, IconComponent]
})

export class ProgramComponent implements IVod {
    public programs: Array<Program>;
    private sub: any;
    btnEdit = new CrudBtn("edit", "");
    btnHide = new CrudBtn("hide", "green");
    btnConfirmEdit = new CrudBtn("confirmEdit", "");
    iconAlert = new Icon("alert", "red");

    programForm: ControlGroup;
    private editAnotherField: Boolean = true;
    private curentEditBtn: number;

    constructor(private _service: ProgramService) {
        this.programForm = new ControlGroup({
            programTitle: new Control('', Validators.required)
        });
    }
    ngOnInit() {
        this.sub = this._service.getPrograms().subscribe(data => {
            this.programs = data;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBtnEdit(program: Program) {
        if (this.editAnotherField) {
            this.curentEditBtn = program.Id;
            this.editAnotherField = false;
            program.Visible = !program.Visible;
        } else
            if (this.curentEditBtn == program.Id && !this.programForm.errors) {
                this.editAnotherField = true;
                program.Visible = !program.Visible;
            }
    }
    onInputChange(program: Program) {
        program.Changed = true;
    }
    onBtnConfirmEdit(program: Program) {
        program.Changed = false;
    }

    onBtnHide(data: NgControlName) {

    }
    onTouched(test) {
        console.log(test);

    }


}
// export class genreValidator {

//  title: Control;
//  genreForm: ControlGroup;

//  constructor(private builder: FormBuilder) {

//    this.title = new Control('', Validators.required);

//    this.genreForm = builder.group({
//      title: this.title
//    });
//  }
//  getForm(){
//      return
//  }
// };