import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from '../../common/services/dal.service';
import { IService } from './../../common/Iservice';
import { SeasonModel } from './../models/season';
import { AbstractBase } from './../../common/services/absract-base.service';

@Injectable()
export class SeasonService extends AbstractBase implements IService<SeasonModel> {
    errorMessage: string;

    constructor(http: Http) {
        super(http);
    }
    getAll(top: number, skip: number): Observable<SeasonModel[]> {
        return this
            .dal.GetItemsByUri('/vod/season/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
            .map((seasons: Array<SeasonModel>) => {
                let result: Array<SeasonModel> = [];
                if (seasons) {
                    seasons.forEach((season: SeasonModel) => {
                        result.push(new SeasonModel(season));
                    });
                }
                return result;
            });
    }
}
