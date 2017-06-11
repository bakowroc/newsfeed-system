import {Component, OnInit} from '@angular/core';
 

@Component ({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})

export default class ManageComponent implements OnInit{
   menu: Array<Object>;
    component: any;
    constructor(){}
    ngOnInit(){      
        this.component = [{
            post: false,
            addPost: false,
            comments: false,
            categories: false,
            users: false,
            groups: false

        }]
         this.menu = [
            {
               name: 'Posts', 
               link: 'posts',  
               style: this.component.post, 
               icon: 'library_books'
           },
            {
                name: 'Add post', 
                link: 'add-post',  
                style: this.component.addPost, 
                icon: 'add'
            },
            {
                name: 'Comments', 
                link: 'comments',  
                style: this.component.comments, 
                icon: 'insert_comment'
            },  
            {
                name: 'Categories', 
                link: 'tags',  
                style: this.component.categories, 
                icon: 'style'
            },
            {
                name: 'Users', 
                link: 'users', 
                style: this.component.users, 
                icon: 'person'
            },
            {
                name: 'Groups', 
                link: 'groups',  
                style: this.component.groups, 
                icon: 'group'
            }
        ]
    }
    close(){
        this.component = [false];
    }
  
    styles(activeComponent){
        if (activeComponent==true){
            return 'active';
        }
        else
            return 'none';
    }
} 