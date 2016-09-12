import { Http, Response } from '@angular/http';
import { EpisodeModel } from '../../vod/models/episode';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../DAL/dal.service';
import { IService } from './IService';

@Injectable()
export class EpisodeService implements IService<EpisodeModel> {
  errorMessage: string;
  _dal: Dal;

  constructor(private _http: Http) {
    this._dal = new Dal(_http);
  }

  getAll(): Observable<EpisodeModel[]> {
    return this
      ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/genre/get')
      .map((episodes: Array<EpisodeModel>) => {
        let result: Array<EpisodeModel> = [];
        if (episodes) {
          episodes.forEach((episode: EpisodeModel) => {
            console.log(JSON.stringify(episode));
            result.push(new EpisodeModel(episode));
          });
        }
        return result;
      });
  }
}
