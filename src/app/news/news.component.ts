import {Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
 

@Component ({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})

export default class NewsComponent implements OnInit{
    news: any;
    
    constructor(private api: ApiService){}
    ngOnInit(){
    
        this.api.GetData('news/').subscribe(x => this.news = x);
        
    }
}