// import {Http, Response } from '@angular/http';
// import {Genre} from '../../vod/models/genre';
// import {Injectable} from '@angular/core';
// import { Observable } from 'rxjs/Rx';
// import {Dal} from '../../Dal/dal.service';
// import {IService} from './IService';

// @Injectable()
// export class GenreService implements IService<Genre> {
//     errorMessage: string;
//     _dal: Dal;
//     constructor(private _http: Http) {
//         this._dal = new Dal(_http);
//     }
//     getAll(): Observable<Genre[]> {
//         return this
//             ._dal.GetItemsByUri('http://localhost/Nana10MVC/vod/genre/getall')
//             .map((genres: Array<Genre>) => {
//                 let result: Array<Genre> = [];
//                 if (genres) {
//                     genres.forEach((genre: Genre) => {
//                         result.push(new Genre(genre));                   
//                     });
//                 }
//                 return result;
//             })
//             ;
//     }
// }
