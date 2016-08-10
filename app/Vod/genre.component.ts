import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgControlName} from '@angular/common';
import { GenreService } from './services/genre.service';
import {Genre} from './models/genre';
import { CrudBtnComponent } from '../buttons/crud-btn.component';
import { CrudBtn} from '../buttons/models/crud-btn';

@Component({
    selector: 'genre',
    templateUrl: 'app/vod/genre.component.html',
    providers: [GenreService],
    directives: [CrudBtnComponent]
})

export class GenreComponent implements OnInit, OnDestroy {
    public genres: Array<Genre>;
    private sub: any;
    btnEdit = new CrudBtn("edit", "");
    btnHide = new CrudBtn("hide", "green");
    btnConfirmChange = new CrudBtn("confirmEdit", "");
    public updatedGenre: Genre;


    constructor(private _service: GenreService) {
    }
    ngOnInit() {
        this.sub = this._service.getGenres().subscribe(data => {
            this.genres = data;
        });
        this.updatedGenre = new Genre({});
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onBtnEdit(genre: Genre) {
        genre.Visible = !genre.Visible;
        // this.genres.filter(item => item.Id == data.Id)[0].Title = "";
    }

    onBtnHide(data: NgControlName) {
        console.log("edit:" + data.control.value);

    }
    onTouched(test) {
        console.log(test);

    }

}