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
               name: 'Posts', link: 'component.post'
           },
            {
                name: 'Add post', link: 'component.addPost=true'
            },
            {
                name: 'Comments', link: 'component.comments'
            },  
            {
                name: 'Categories', link: 'component.categories'
            },
            {
                name: 'Users', link: 'component.users'
            },
            {
                name: 'Add user', link: 'component.addUser'
            },
            {
                name: 'Groups', link: 'component.groups'
            }
        ]
    }
    component: any[]=[{
        post: false,
        addPost: false,
        comments: false,
        categories: false,
        users: false,
        addUser: false,
        groups: false
    }]
    
    close(){
        this.component = [false]
    }
} 