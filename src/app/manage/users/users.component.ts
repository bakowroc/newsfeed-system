import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export default class UsersComponent{
    @Input() show;
    constructor() {}
} 