import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component ({
    selector: 'users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export default class UsersComponent{
    @Input() show;
    users: any;
    current_user: any;
    user: any;
    constructor(private API: ApiService, private auth: AuthService){}
    ngOnInit(){
        this.usersLoad();
        this.auth.checkLoggedStatus();
        this.auth.getLoggedStatus()
                    .subscribe((response)=>{
                        this.current_user = response;

        });
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
