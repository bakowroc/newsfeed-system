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
    current_user: Object;

    constructor(private auth: AuthService){}
    ngOnInit(){
        this.menu = [
           {
               name: 'Home', link: '/', class: ''
           },
            {
                name: 'Trending', link: 'trending', class: ''
            },
            {
                name: 'About us', link: 'about', class: ''
            },
            {
                name: '*management panel*', link: 'manage', class: 'temporary'
            },
            {
                name: '*user-settings*', link: 'settings', class: 'temporary snd'
            }
        ]

        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
        }

}
