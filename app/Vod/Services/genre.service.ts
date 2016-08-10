import {Http, Response } from '@angular/http';
import {Genre} from '../../vod/models/genre';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Dal} from '../../Dal/dal.service';

@Injectable()
export class GenreService {
    errorMessage: string;
    _dal: Dal;
    constructor(private _http: Http) {
        this._dal = new Dal(_http);
    }
    getGenres(): Observable<Genre[]> {
        return this
            ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/genre/getall')
            .map((tasks: Array<any>) => {
                let result: Array<Genre> = [];
                if (tasks) {
                    tasks.forEach((task) => {
                        result.push(new Genre(task));
                    });
                }
               return result;
            })
            ;
    }
}
