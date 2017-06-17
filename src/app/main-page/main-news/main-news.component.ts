import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
  
 
@Component ({
     selector: 'main-news',
     templateUrl: './main-news.component.html',
     styleUrls: ['./main-news.component.scss'],
 })
 
 export default class MainNewsComponent implements OnInit{
    news: any;

    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('news')
                .subscribe((response)=> this.news = response);
        
    }
}
 
