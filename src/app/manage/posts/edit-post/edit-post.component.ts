import {Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../../app.router';
 

@Component ({
    selector: 'edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss']
})

export default class EditPostComponent{
news: any = {};
tags: any;
    
constructor(private route: ActivatedRoute, private API: ApiService, private router: Router){}
    ngOnInit(){
        this.route.params
            .subscribe(params => {
                this.API.get('news/' + params['id'])
                        .subscribe((response)=> {
                            this.news = response;
                            console.log(this.news);
                        })
            });
        
        this.API.get('tags')
                .subscribe((response)=> this.tags = response);
    }
    newsUpdate(id: number){
      
        this.API.update('news', id, this.news)
            .subscribe((response)=>{
                console.log(response);     
                this.go();
        });
    }
    go(){
        this.router.navigate(['../../../posts'], { relativeTo: this.route });
    }
}


   