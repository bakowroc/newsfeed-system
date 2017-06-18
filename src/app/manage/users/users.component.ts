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
    addRedactor(id: number, username: string, email: any, group: any){
        let groups = group == 1 ? 3 : 1;
        this.user = {
        username: username,
        email: email || '',
        groups: [groups]
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