import { Http, Response } from '@angular/http';
import { GenreModel } from '../Models/genre';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../Dal/dal.service';
import { IService } from './iservice';

@Injectable()
export class GenreService implements IService<GenreModel> {
  errorMessage: string;
  _dal: Dal;
  constructor(private _http: Http) {
    this._dal = new Dal(_http);
  }
  getAll(top:number,skip:number): Observable<GenreModel[]> {
    return this
      ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/genre/get?$top=' + top + '&$skip=' + skip + '&$orderby=Id desc')
      .map((genres) => {
        console.log(genres);
        
        let result: Array<GenreModel> = [];
        if (genres) {
          genres.forEach((genre) => {
            result.push(new GenreModel(genre));
          });
        }
        return result;
      }).delay(0)
      ;
  }
}
