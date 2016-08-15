import {Component} from '@angular/core';
import { EpisodeService } from './services/episode.service';
import {Episode} from './models/episode';
import { IVod } from './ivod.component';
import { CrudBtnComponent } from '../inputs/crud-btn.component';
import { CrudBtn} from '../inputs/models/crud-btn';
import { Icon} from '../inputs/models/icon';
import { IconComponent } from '../inputs/icon.component';
import {NgControlName, ControlGroup, Control, Validators, FormBuilder} from '@angular/common';

@Component({
    selector: 'episode',
    templateUrl: 'app/vod/episode.component.html',
    providers: [EpisodeService],
    directives: [CrudBtnComponent, IconComponent],
})
export class EpisodeComponent extends IVod<Episode> {

    constructor(public _service: EpisodeService, fb: FormBuilder) {
        super(_service);
        this.form = fb.group({
            Title: ['', Validators.required]
        });
    }
}

