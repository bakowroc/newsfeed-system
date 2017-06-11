import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service'

@Component ({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export default class RegisterComponent implements OnInit{

    data = {};
    signUp: any = true;
    current_user: Object; 

    constructor(private auth: AuthService){}

    formSubmit() {
        console.log(this.data);
    }

    ngOnInit(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    close(){
        this.signUp = false;
    }
}
