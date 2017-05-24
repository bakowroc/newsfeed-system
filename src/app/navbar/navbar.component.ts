import {Component, OnInit} from '@angular/core';
 

@Component ({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export default class NavbarComponent implements OnInit{
    menu: Array<Object>;
    
    
    constructor(){}
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
                name: 'Sign in', link: 'sign-in', class: 'log-in'
            }
            
        ]
    }
} 