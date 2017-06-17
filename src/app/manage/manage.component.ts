import {Component, OnInit, OnChanges, OnDestroy} from '@angular/core';
import { AuthService } from '../services/auth.service'
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../app.router';


@Component ({
    selector: 'manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})

export default class ManageComponent implements OnInit, OnChanges, OnDestroy{

    menu: Array<Object>;
    active: number = 0;
    current_user: Object;

    constructor(private route: ActivatedRoute, private API: ApiService, private router: Router, private auth: AuthService){}

    ngOnInit(){
        
        
         this.menu = [
            {
               name: 'Posts',
               link: 'posts',
               icon: 'library_books'
           },
            {
                name: 'Add post',
                link: 'add-post',
                icon: 'add'
            },
            {
                name: 'Comments',
                link: 'comments',
                icon: 'insert_comment'
            },
            {
                name: 'Categories',
                link: 'tags',
                icon: 'style'
            },
            {
                name: 'Users',
                link: 'users',
                icon: 'person'
            }
        ]
        this.auth.checkLoggedStatus();
        this.auth.getLoggedStatus()
                    .subscribe((response)=>{
                        this.current_user = response;
                        let groupOfLoggedUser = this.current_user['groups'][0]['id']
                            if(groupOfLoggedUser == 3)
                                this.router.navigate(['../'], { relativeTo: this.route });
            
        });
    }

    ngOnChanges(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    ngOnDestroy(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }
}
