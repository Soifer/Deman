import {Http, Response } from '@angular/http';
import {Season} from '../../vod/models/season';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Dal} from '../../Dal/dal.service';
import {IService} from './IService';

@Injectable()
export class SeasonService implements IService<Season> {
    errorMessage: string;
    _dal: Dal;
    constructor(private _http: Http) {
        this._dal = new Dal(_http);
    }
    getAll(): Observable<Season[]> {
        return this
            ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/season/getall')
            .map((seasons: Array<Season>) => {
                let result: Array<Season> = [];
                if (seasons) {
                    seasons.forEach((season: Season) => {
                        result.push(new Season(season));                   
                    });
                }
                return result;
            });
    }
}
