import {Component, OnInit} from '@angular/core';
 

@Component ({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})

export default class NewsComponent implements OnInit{
    news: Array<Object>;
    
    constructor(){}
    ngOnInit(){
        this.news = [
           {
               name: 'News 1', link: '/', class: 'single-news'
           },
            {
                name: 'News 2', link: '/', class: 'single-news'
            },  
            {
                name: 'News 3', link: '/', class: 'single-news'
            }
            
        ]
    }
}