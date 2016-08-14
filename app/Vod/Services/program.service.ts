import {Http, Response } from '@angular/http';
import {Program} from '../../vod/models/program';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Dal} from '../../Dal/dal.service';

@Injectable()
export class ProgramService {
    errorMessage: string;
    _dal: Dal;
    constructor(private _http: Http) {
        this._dal = new Dal(_http);
    }
    getPrograms(): Observable<Program[]> {
        return this
            ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/program/getall')
            .map((programs: Array<any>) => {
                let result: Array<Program> = [];
                if (programs) {
                    programs.forEach((program: Program) => {
                        result.push(program);
                    });
                }
                return result;
            })
            ;
    }
}
