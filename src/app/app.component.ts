import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './services/auth.service'

@Component ({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AuthService]
})

export default class AppComponent implements OnInit, OnChanges{

    current_user: Object;

    constructor(private auth: AuthService){}

    ngOnInit(){

        this.auth.checkLoggedStatus();
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    ngOnChanges(){


    }
}
