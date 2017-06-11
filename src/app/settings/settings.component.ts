import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component ({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export default class SettingsComponent implements OnInit{

    current_user: Object;

    constructor(private auth: AuthService){}

    ngOnInit(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }
}
