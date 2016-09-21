import { Http, Response } from '@angular/http';
import { SeasonModel } from '../Models/season';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../DAL/dal.service';
import { IService } from './IService';

@Injectable()
export class SeasonService implements IService<SeasonModel> {
    errorMessage: string;
    _dal: Dal;
    constructor(private _http: Http) {
        this._dal = new Dal(_http);
    }
    getAll(): Observable<SeasonModel[]> {
        return this
            ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/season/get')
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
