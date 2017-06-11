import {Component, Input, Output, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute} from '@angular/router';

@Component ({
    selector: 'news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})

export default class NewsPageComponent implements OnInit{

    SingleNews: any;
    Comments: any;
    newsIdOutput: number;

    constructor(private route: ActivatedRoute, private API: ApiService){}

    ngOnInit(){
        this.route.params
                    .subscribe(params => {
                        this.newsIdOutput = params['id']
                        this.API.get('news/' + params['id'])
                                .subscribe((response)=> {
                                    this.SingleNews = response;
                                    this.Comments = response['comments'].reverse();
                                })
                    });
    }

    loadComments(){
        this.route.params
                    .subscribe(params => {
                        this.newsIdOutput = params['id']
                        this.API.get('news/' + params['id'])
                                .subscribe((response)=> {
                                    this.Comments = response['comments'].reverse();
                                })
                    });
    }
}
