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
                name: 'Trending', link: '/', class: ''
            },  
            {
                name: 'About us', link: '/', class: ''
            },  
            {
                name: 'Sign in', link: '/', class: 'log-in'
            }
            
        ]
    }
} 