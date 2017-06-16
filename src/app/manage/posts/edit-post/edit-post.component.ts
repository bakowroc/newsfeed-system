import {Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
 

@Component ({
    selector: 'edit-post',
    templateUrl: './edit-post.component.html',
    styleUrls: ['./edit-post.component.scss']
})

export default class EditPostComponent{
news: any = {};
tags: any;
    
constructor(private route: ActivatedRoute, private API: ApiService){}
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
        });
    }
}


   