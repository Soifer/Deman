import {Component} from '@angular/core';
import { GenreService } from './services/genre.service';
import {Genre} from './models/genre';
import { IVod } from './ivod.component';
import { CrudBtnComponent } from '../inputs/crud-btn.component';
import { CrudBtn} from '../inputs/models/crud-btn';
import { Icon} from '../inputs/models/icon';
import { IconComponent } from '../inputs/icon.component';
import {NgControlName, ControlGroup, Control, Validators, FormBuilder} from '@angular/common';

@Component({
    selector: 'genre',
    templateUrl: 'app/vod/genre.component.html',
    providers: [GenreService],
    directives: [CrudBtnComponent, IconComponent],
})
export class GenreComponent extends IVod<Genre> {

    constructor(public _service: GenreService, fb: FormBuilder) {
        super(_service);
        this.form = fb.group({
            genreTitle: ['', Validators.required]
        });
    }
}

