import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from '../../common/services/dal.service';
import { IService } from './../../common/Iservice';
import { EpisodeModel } from './../models/episode';
import { AbstractBase } from './../../common/services/absract-base.service';
import { ApiControllers } from '../../common/Enums';

@Injectable()
export class EpisodeService extends AbstractBase implements IService<EpisodeModel>  {
  errorMessage: string;

  constructor(http: Http) {
    super(http);
  }

  getAll(top: number, skip: number): Observable<EpisodeModel[]> {
    return this
      .dal.GetItemsByUri('/vod/episode/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
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
  getCount() {
    return super.getCount(ApiControllers[ApiControllers.EpisodeController]);
  }
}

