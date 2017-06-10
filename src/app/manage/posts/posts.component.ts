import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component ({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export default class PostsComponent{
    @Input() show;
     
    news: any;
    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('news')
                .subscribe((response)=> this.news = response);

    }
} 