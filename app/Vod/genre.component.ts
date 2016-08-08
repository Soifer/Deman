import {Component, OnInit, OnDestroy} from '@angular/core';
import { GenreService } from './services/genre.service';
import {Genre} from './models/genre';
import { CrudBtnComponent } from '../Buttons/crud-btn.component';

@Component({
    selector: 'genre',
    templateUrl: 'app/vod/genre.component.html',
    providers: [GenreService],
    directives: [CrudBtnComponent]
})

export class GenreComponent implements OnInit, OnDestroy {
    public genres: Array<Genre>;
    private sub: any;
    constructor(private _service: GenreService) {
    }
    ngOnInit() {
        console.log("genre init");
        this.sub = this._service.getGenres().subscribe(data => {
            this.genres = data;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}