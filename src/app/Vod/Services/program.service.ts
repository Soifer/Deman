import { Http, Response } from '@angular/http';
import { ProgramModel } from '../../vod/models/program';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Dal } from '../../Dal/dal.service';
import { IService } from './IService';




@Injectable()
export class ProgramService implements IService<ProgramModel> {
    errorMessage: string;
    _dal: Dal;
    constructor(private _http: Http) {
        this._dal = new Dal(_http);
    }

    getAll(skip: number, top: number): Observable<ProgramModel[]> {
        return this
            ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/program/get?%24top=' + top + '&%24skip=' + skip + '&%24orderby=Id%20desc')
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
}
