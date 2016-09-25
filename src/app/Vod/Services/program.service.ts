import { Http, Response } from '@angular/http';
import { ProgramModel } from '../../Vod/Models/program';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../DAL/dal.service';
import { IService } from './IService';




@Injectable()
export class ProgramService implements IService<ProgramModel> {
    errorMessage: string;
    _dal: Dal;
    constructor(private _http: Http) {
        this._dal = new Dal(_http);
    }

    getAll(top: number, skip: number): Observable<ProgramModel[]> {
        return this
            ._dal.GetItemsByUri('/vod/program/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
            .map((programs: Array<any>) => {
                let result: Array<ProgramModel> = [];
                if (programs) {
                    programs.forEach((program: ProgramModel) => {
                        result.push(new ProgramModel(program));
                    });
                }
                return result;
            });
    }
      getCount(controllerName: string = 'ProgramController'): Observable<Number> {
    return this._dal.getCount(controllerName).map((data: any) => {
      let result: number = Number.parseInt(data.json());
      return result;
    });
  }
}
