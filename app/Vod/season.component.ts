import {Component} from '@angular/core';
import { SeasonService } from './services/season.service';
import {Season} from './models/season';
import { IVod } from './ivod.component';
import { CrudBtnComponent } from '../inputs/crud-btn.component';
import { CrudBtn} from '../inputs/models/crud-btn';
import { Icon} from '../inputs/models/icon';
import { IconComponent } from '../inputs/icon.component';
import {NgControlName, ControlGroup, Control, Validators, FormBuilder} from '@angular/common';

@Component({
    selector: 'season',
    templateUrl: 'app/vod/season.component.html',
    providers: [SeasonService],
    directives: [CrudBtnComponent, IconComponent],
})
export class SeasonComponent extends IVod<Season> {

    constructor(public _service: SeasonService, fb: FormBuilder) {
        super(_service);
        this.form = fb.group({
            Name: ['', Validators.required]
        });
    }


}

