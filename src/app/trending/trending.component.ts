import {Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ApiService } from '../services/api.service';

@Component ({
    selector: 'trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss']
})

export default class TrendingComponent implements OnInit, OnChanges{
    mark: any;
    menu: Array<Object>;
    active: number = 0;
    current_user: Object;

    constructor(private API: ApiService, private auth: AuthService){}

    ngOnInit(){

        this.API.get('marks')
              .subscribe((response)=> this.mark = response);

        
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    ngOnChanges(){

        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);

    }

}