import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgControlName, ControlGroup, Control, Validators, FormBuilder} from '@angular/common';
import { GenreService } from './services/genre.service';
import {Genre} from './models/genre';
import { CrudBtnComponent } from '../inputs/crud-btn.component';
import { CrudBtn} from '../inputs/models/crud-btn';
import { Icon} from '../inputs/models/icon';
import { IconComponent } from '../inputs/icon.component';
import {UiEventsModel} from './models/uiEventsModel';

@Component({
    selector: 'genre',
    templateUrl: 'app/vod/genre.component.html',
    providers: [GenreService],
    directives: [CrudBtnComponent, IconComponent],
})

export class GenreComponent implements OnInit, OnDestroy {
    public genres: Array<Genre>;
    private sub: any;
    btnEdit = new CrudBtn("edit", "");
    btnHide = new CrudBtn("hide", "green");
    btnConfirmEdit = new CrudBtn("confirmEdit", "");
    iconAlert = new Icon("alert", "red");
    public editAnotherField: boolean = true;
    public curentEditBtn: number;
    genreForm: ControlGroup;


    constructor(private _service: GenreService) {
        this.genreForm = new ControlGroup({
            genreTitle: new Control('', Validators.required),
        });
    }
    ngOnInit() {
        this.sub = this._service.getGenres().subscribe(data => {
            this.genres = data;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBtnEdit(genre: Genre) {
        console.log(genre);
        if (this.editAnotherField) {
            this.curentEditBtn = genre.Id;
            this.editAnotherField = false;
            genre.Visible = !genre.Visible;

        } else
            if (this.curentEditBtn == genre.Id && this.genreForm.valid) {
                this.editAnotherField = true;
                genre.Visible = !genre.Visible;
            }
    }
    onInputChange(genre: Genre) {
        genre.Changed = true;
    }
    onBtnConfirmEdit(genre: Genre) {
        genre.Changed = false;
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