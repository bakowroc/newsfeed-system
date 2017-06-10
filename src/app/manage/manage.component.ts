import {Component, OnInit} from '@angular/core';
 

@Component ({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})

export default class ManageComponent implements OnInit{
   menu: Array<Object>;
    component: any;
    componentPost: boolean = true;
    constructor(){}
    ngOnInit(){
        this.menu = [
           {
               name: 'Posts', link: 'close() || (component.post=true)', style: 'styles(componentPost)'
           },
            {
                name: 'Add post', link: 'close() || (component.addPost=true)', style: 'styles(component.addPost)'
            },
            {
                name: 'Comments', link: 'close() || (component.comments=true)', style: 'styles(component.comments)'
            },  
            {
                name: 'Categories', link: 'close() || (component.categories=true)', style: 'styles(component.categories)'
            },
            {
                name: 'Users', link: 'close() || (component.users=true)', style: 'styles(component.users)'
            },
            {
                name: 'Groups', link: 'close() || (component.groups=true)', style: 'styles(component.groups)'
            }
        ]
    
    this.component = [{
        //post: true,
        addPost: false,
        comments: false,
        categories: false,
        users: false,
        groups: false
      
    }]
    }
    close(){
        this.component = [false];
        this.componentPost = false;
    }
    
    styles(activeComponent){
        if (activeComponent==true){
            return 'active';
        }
        else
            return 'none';
    }
} 