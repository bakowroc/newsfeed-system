import {Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component ({
    selector: 'trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.scss']
})

export default class TrendingComponent implements OnInit, OnChanges{

    menu: Array<Object>;
    active: number = 0;
    current_user: Object;

    constructor(private auth: AuthService){}

    ngOnInit(){

        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    ngOnChanges(){

        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);

    }

}
