import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ApiService } from '../services/api.service'

@Component ({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export default class RegisterComponent{
    current_user: Object; 
    user: Object = {};
    
    constructor(private API: ApiService, private auth: AuthService){}

   ngOnInit(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    addUser(){
        this.user['first_name'] = '';
        this.user['last_name'] = '';
        
        this.API.register('users', this.user)
                .subscribe((response)=>{
                     console.log(response)
                })
    }

}