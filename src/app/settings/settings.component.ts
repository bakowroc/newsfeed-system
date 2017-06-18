import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ApiService } from '../services/api.service';
@Component ({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export default class SettingsComponent implements OnInit{
    current_user: Object;

    constructor(private API: ApiService, private auth: AuthService){}

    ngOnInit(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }
    userUpdate(id: number, username: string, email: any){
       this.current_user = {
           username: username,
           email: email,
       }
        console.log(this.current_user);
        
        this.API.update('users', id, this.current_user)
            .subscribe((response)=>{
                console.log(this.current_user)
            })

}
}



