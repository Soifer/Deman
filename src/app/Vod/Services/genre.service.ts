import { Http, Response } from '@angular/http';
import { Genre } from '../Models/genre';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../DAL/dal.service';
import { IService } from './IService';

@Injectable()
export class GenreService implements IService<Genre> {
  errorMessage: string;
  _dal: Dal;
  constructor(private _http: Http) {
    this._dal = new Dal(_http);
  }
  getAll(top: number, skip: number): Observable<Genre[]> {
    return this
      ._dal.GetItemsByUri('/vod/genre/get?$top=' + top + '&$skip=' + skip + '&$orderby=Id desc')
      .map((genres) => {
        console.log('getall genres:' + genres);

        let result: Array<Genre> = [];
        if (genres) {
          genres.forEach((genre) => {
            result.push(new Genre(genre));
          });
        }
        return result;
      }).debounceTime(100)
      ;
  }

  getCount(controllerName: string): Observable<any> {
    return this._dal.getCount(controllerName).map((data: any) => {
      let result = data.json();
      return result;
    });
  }
}
