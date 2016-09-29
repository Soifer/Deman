import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { IService } from '../../common/Iservice';
import { VodServices } from '../../common/Enums';
import { GenreService } from '../../vod/services/genre.service';
import { ProgramService } from '../../vod/services/program.service';
import { EpisodeService } from '../../vod/services/episode.service';
import { SeasonService } from '../../vod/services/season.service';

export class VodFactory {

    constructor(private _http: Http) { }

    public GetInstanceByKey(serv: string): IService<any> {
        switch (serv) {
            case VodServices[VodServices.genre]:
                return new GenreService(this._http);
            case VodServices[VodServices.program]:
                return new ProgramService(this._http);
            case VodServices[VodServices.season]:
                return new SeasonService(this._http);
            case VodServices[VodServices.episode]:
                return new EpisodeService(this._http);
            default:
                throw new RangeError('unknown case ' + serv + ' in VodFactory');
        }
    }
}
