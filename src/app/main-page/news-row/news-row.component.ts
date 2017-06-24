import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component ({
    selector: 'news-row',
    templateUrl: './news-row.component.html',
    styleUrls: ['./news-row.component.scss']
})

export default class NewsRowComponent implements OnInit{

    news: any;

    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('news')
                .subscribe((response)=> this.news = response);

    }
}
