import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'
 

@Component ({
    selector: 'add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss'],
    providers: [ApiService]
})

export default class AddPostComponent{
    @Input() show;
    tags: any;
    news: Object = {};
     
    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('tags')
                .subscribe((response)=> this.tags = response);

    }
    addNews(){
        this.API.post('news', this.news)
                .subscribe((response)=>{
                     console.log(response);
                })
    }
} 