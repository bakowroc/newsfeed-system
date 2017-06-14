import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'


@Component ({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export default class SignInComponent implements OnInit{

    data: Object;
    current_user: Object;
    errorLogin: Boolean = false;

    constructor(private API: ApiService, private auth: AuthService, private router: Router){

        this.data = {
            username: '',
            password: ''
        }

    }

    ngOnInit(){
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
                        window.location.replace('/');
                    }else this.errorLogin = true;

                });
    }

}
