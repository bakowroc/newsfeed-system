import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})

export default class AddUserComponent{
    @Input() show;
    constructor() {}
} 