import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from '../../common/services/dal.service';
import { IService } from './../../common/Iservice';
import { ProgramModel } from './../models/program';
import { AbstractBase } from './../../common/services/absract-base.service';
import { ApiControllers } from '../../common/Enums';

@Injectable()
export class ProgramService extends AbstractBase implements IService<ProgramModel> {
    errorMessage: string;

    constructor(http: Http) {
        console.log('program ctor');
        super(http);
    }

    getAll(top: number, skip: number): Observable<ProgramModel[]> {
        return this
            .dal.GetItemsByUri('/vod/program/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
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
  getCount() {
    return super.getCount(ApiControllers[ApiControllers.ProgramController]);
  }
}
