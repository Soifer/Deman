import { Observable } from 'rxjs/Rx';

export interface IService<T>{
    getAll(): Observable<T[]>
}