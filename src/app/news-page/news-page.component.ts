import {Component, Input, Output, OnInit, OnChanges} from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service'
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})

export default class NewsPageComponent implements OnInit, OnChanges{

    SingleNews: any;
    Comments: any;
    newsIdOutput: number;
    current_user: Object;

    constructor(private route: ActivatedRoute, private API: ApiService, private auth: AuthService){}

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

        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

    ngOnChanges(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
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
