import {Component, Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component ({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export default class SignInComponent{

    data: Object;

    constructor(private API: ApiService){

        this.data = {
            username: '',
            password: ''
        }

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
                    }
                });
    }

}
