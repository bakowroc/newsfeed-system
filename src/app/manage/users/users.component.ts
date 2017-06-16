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
    user: any;
    constructor(private API: ApiService){}
    ngOnInit(){
        this.usersLoad();
    }
    addRedactor(id: number, username, group){
        this.user = {
        username: username,
        groups: [id:1]
        }
        console.log(this.user);
        
        this.API.update('users', id, this.user)
            .subscribe((response)=>{
                this.usersLoad();
            })
    }
    usersLoad(){
        this.API.get('users')
                .subscribe((response)=> this.users = response);
    }
} 