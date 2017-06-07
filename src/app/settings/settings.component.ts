import {Component} from '@angular/core';
 

@Component ({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export default class SettingsComponent{
     data = {};
    formSubmit() {
    console.log(this.data);
    } 
} 