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
export class ProgramComponent extends IVod<Program> {

    constructor(public _service: ProgramService, fb: FormBuilder) {
        super(_service);
        this.form = fb.group({
            programTitle: ['', Validators.required]
        });
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