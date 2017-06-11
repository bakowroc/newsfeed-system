import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component ({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export default class SignInComponent implements OnInit, OnChanges{

    data: Object;
    current_user: Object;

    constructor(private API: ApiService, private auth: AuthService){

        this.data = {
            username: '',
            password: ''
        }

    }

    ngOnInit(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    ngOnChanges(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);

    }

    login() {

        let userLoginData = {
            username: this.data['username'],
            password: this.data['password']
        };

        this.API.getLoginToken(userLoginData)
                .subscribe((response)=>{
                    if(response){
                        localStorage.setItem('jwttoken', response['token']);
                        this.auth.checkLoggedStatus();
                    }
                });
    }

}
