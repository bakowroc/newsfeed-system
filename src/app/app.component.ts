import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './services/auth.service'
import { ApiService } from './services/api.service'

@Component ({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AuthService]
})

export default class AppComponent implements OnInit{

    current_user: Object;

    constructor(private auth: AuthService, private api: ApiService){}

    ngOnInit(){

        this.auth.checkLoggedStatus();
        
    }
}
