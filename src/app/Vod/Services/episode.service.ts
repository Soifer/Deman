import { Http, Response } from '@angular/http';
import { EpisodeModel } from '../Models/episode';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../DAL/dal.service';
import { IService } from './IService';

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
      ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/episode/get?%24top=' + top + '&%24skip=' + skip + '&%24orderby=Id%20desc')
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
    return this._dal.getCount(controllerName).map((data: any) =>{
       let result = data.json(); 
       console.log("result: " + result);
       
       return result;
      });
  }
}

