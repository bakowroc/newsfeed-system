import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component ({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export default class UsersComponent{
    @Input() show;
    users: any;
    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('users')
                .subscribe((response)=> this.users = response);
    }
} 