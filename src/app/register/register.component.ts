import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export default class RegisterComponent {
      data = {};
    formSubmit() {
    console.log(this.data);
    } 

    signUp: any = true;
    close(){
    this.signUp = false;
    }
}