import { Http, Response } from '@angular/http';
import { Genre } from '../Models/genre';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../Dal/dal.service';
import { IService } from './IService';

@Injectable()
export class GenreService implements IService<Genre> {
  errorMessage: string;
  _dal: Dal;
  constructor(private _http: Http) {
    this._dal = new Dal(_http);
  }
  getAll(skip: number, top: number): Observable<Genre[]> {
    return this
      ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/genre/get?%24top=' + top + '&%24skip=' + skip + '&%24orderby=Id%20desc')
      .map((genres) => {
        let result: Array<Genre> = [];
        if (genres) {
          genres.forEach((genre) => {
            result.push(new Genre(genre));
          });
        }
        return result;
      }).delay(0)
      ;
  }
}
