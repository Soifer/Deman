// import {Http, Response } from '@angular/http';
// import {Episode} from '../../vod/models/episode';
// import {Injectable} from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import {Dal} from '../../Dal/dal.service';
// import {IService} from './IService';

// @Injectable()
// export class EpisodeService implements IService<Episode> {
//     errorMessage: string;
//     _dal: Dal;
//     constructor(private _http: Http) {
//         this._dal = new Dal(_http);
//     }
//     getAll(): Observable<Episode[]> {
//         return this
//             ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/genre/getall')
//             .map((episodes: Array<Episode>) => {
//                 let result: Array<Episode> = [];
//                 if (episodes) {
//                     episodes.forEach((episode: Episode) => {
//                         result.push(new Episode(episode));                   
//                     });
//                 }
//                 return result;
//             })
//             ;
//     }
// }
