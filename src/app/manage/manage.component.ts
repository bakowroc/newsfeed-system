import {Component, OnInit} from '@angular/core';
 

@Component ({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})

export default class ManageComponent implements OnInit{
   menu: Array<Object>;
    constructor(){}
    ngOnInit(){
        this.menu = [
           {
               name: 'Posts', link: '#'
           },
            {
                name: 'Add post', link: '#'
            },
            {
                name: 'Comments', link: '#'
            },  
            {
                name: 'Categories', link: '#'
            },
            {
                name: 'Users', link: '#'
            },
            {
                name: 'Add user', link: '#'
            },
            {
                name: 'Groups', link: '#'
            }
        ]
    }
} 