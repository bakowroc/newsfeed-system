import {Component, Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
 

@Component ({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})

export default class SignInComponent{
    data = {};
    formSubmit() {
    console.log(this.data);
    } 
 //   @Input() logIn: String;
    logIn: any = true;
    close(){
    this.logIn = false;
    }
  
}