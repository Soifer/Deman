import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from './dal.service';

export abstract class AbstractBase {
    dal: Dal;

    constructor(private _http: Http) {
        this.dal = new Dal(_http);
    }
    getCount(controllerName: string): Observable<any> {
        return this.dal.getCount(controllerName).map((data: any) => {
            let result = data.json();
            return result;
        });
    }
}