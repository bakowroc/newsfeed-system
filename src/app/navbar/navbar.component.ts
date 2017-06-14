import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import SignInComponent from '../sign-in/sign-in.component'
import { AuthService } from '../services/auth.service'

@Component ({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export default class NavbarComponent implements OnInit {

    menu: Array<Object>;
    logMenu: Array<Object>;
    current_user: Object;
    showMenu: boolean = false;

    constructor(private auth: AuthService){}
    ngOnInit(){
      /*  this.menu = [
            {
                name: 'Trending', link: 'trending'
            },
            {
                name: 'About us', link: 'https://github.com/bakowroc/newsfeed-system'
            }
        ]*/

        this.logMenu = [
            {
                name: 'Account Settings', link: 'settings', icon: 'settings'
            },
            {
                name: 'Management Panel', link: 'manage', icon: 'dashboard'
            }
        ]
            this.auth.checkLoggedStatus();
            this.auth.getLoggedStatus()
                    .subscribe((response)=>{
                        this.current_user = response;
                    });


        }
        logout(){
            localStorage.removeItem('jwttoken');
            window.location.replace('/');
        }
}
