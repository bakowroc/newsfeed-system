import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable ()
export class ApiService {
    url: string='http://127.0.0.1:8000/api/'
    constructor (private http: Http) {};

    get(path: string, id?: number): Observable<Response>{
        return this.http
                    .get(this.url + path + '/')
                    .map((res: Response) => res.json());
    }

    post(path: string, post_object: Array<Object>): Observable<Response>{
        return this.http
                    .post(this.url + path + '/create/', post_object)
                    .map((res: Response) => res.json());
    }

    update(path: string, id: number, put_object: Array<Object>): Observable<Response>{
        return this.http
                    .put(this.url + path + '/update/', put_object)
                    .map((res: Response) => res.json());
    }

    delete(path: string, id: number): Observable<Response>{
        return this.http
                    .delete(this.url + path + '/destroy/')
                    .map((res: Response) => res.json());
    }

}
