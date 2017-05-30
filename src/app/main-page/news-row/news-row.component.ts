import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
 

@Component ({
    selector: 'news-row',
    templateUrl: './news-row.component.html',
    styleUrls: ['./news-row.component.scss']
})

export default class NewsRowComponent implements OnInit{
    news: any;
    
    constructor(private api: ApiService){}
    ngOnInit(){
    
        this.api.GetData('news/').subscribe(x => this.news = x);
        
    }
}