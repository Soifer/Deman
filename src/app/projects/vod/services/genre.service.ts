import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from '../../common/services/dal.service';
import { IService } from './../../common/Iservice';
import { GenreModel } from './../models//genre';

@Injectable()
export class GenreService implements IService<GenreModel> {
  errorMessage: string;
  _dal: Dal;
  constructor(private _http: Http) {
    this._dal = new Dal(_http);
  }
  getAll(top: number, skip: number): Observable<GenreModel[]> {
    return this
      ._dal.GetItemsByUri('/vod/genre/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
      .map((genres) => {
        let result: Array<GenreModel> = [];
        if (genres) {
          genres.forEach((genre) => {
            result.push(new GenreModel(genre));
          });
        }
        return result;
      })
      ;
  }
  getCount(controllerName: string): Observable<any> {
    console.log('genre:' + controllerName);
    return this._dal.getCount(controllerName).map((data: any) => {
      let result = data.json();
      return result;
    });
  }
}
