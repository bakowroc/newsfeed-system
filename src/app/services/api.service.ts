import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable ()
export class ApiService {

    url: string;
    headers: Headers;
    options: RequestOptions;

    constructor (private http: Http) {

        this.url = 'http://127.0.0.1:8000/api/';

        this.headers = new Headers({
            "Authorization": "JWT " + localStorage.getItem("jwttoken"),
            "Content-Type": 'application/json'
        });

        this.options = new RequestOptions({headers: this.headers});
    };

    get(path: string, id?: number): Observable<Response>{
        return this.http
                    .get(this.url + path + '/')
                    .map((res: Response) => res.json());
    }

    getWeather(path: string): Observable<Response>{
        return this.http
                    .get(path)
                    .map((res: Response) => res.json());
    }

    post(path: string, post_object: Object): Observable<Response>{
        return this.http
                    .post(this.url + path + '/create/', post_object, this.options)
                    .map((res: Response) => res.json());
    }

    update(path: string, id: number, put_object: Object): Observable<Response>{
        return this.http
                    .put(this.url + path + '/update/', put_object, this.options)
                    .map((res: Response) => res.json());
    }

    delete(path: string, id: number): Observable<Response>{
        return this.http
                    .delete(this.url + path + '/destroy/', this.options)
                    .map((res: Response) => res.json());
    }

    getLoginToken(user_login_object: Object): Observable<Response>{

        //user_login_object = JSON.stringify(user_login_object);
        console.log(user_login_object);

        return this.http
                    .post(this.url + 'users/login/', user_login_object, this.headers)
                    .map((res: Response) => res.json());
    }

    getLoginUser(): Observable<Response>{
        return this.http
                    .get(this.url + 'users/current/', this.options)
                    .map((res: Response) => res.json());
    }

}
