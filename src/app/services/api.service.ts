import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable ()
export class ApiService {
    url: string='http://localhost:8000/api/'
    constructor (private http: Http) {};
    
    GetData(path: string): Observable<Response> {
       return this.http
                    .get(this.url + path)
                    .map((res: Response) => res.json());
       
    }
}