import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from '../../common/services/dal.service';
import { IService } from './../../common/Iservice';
import { EpisodeModel } from './../models/episode';

@Injectable()
export class EpisodeService implements IService<EpisodeModel> {
  errorMessage: string;
  _dal: Dal;
  total: any;

  constructor(private _http: Http) {
    this._dal = new Dal(_http);
  }

  getAll(top: number, skip: number): Observable<EpisodeModel[]> {
    return this
      ._dal.GetItemsByUri('/vod/episode/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
      .map((episodes: Array<EpisodeModel>) => {
        let result: Array<EpisodeModel> = [];
        if (episodes) {
          episodes.forEach((episode: EpisodeModel) => {
            result.push(new EpisodeModel(episode));
          });
        }
        return result;
      });
  }

  getCount(controllerName: string): Observable<any> {
    console.log('episode:' + controllerName);
    return this._dal.getCount(controllerName).map((data: any) => {
      let result = data.json();
      return result;
    });
  }
}

