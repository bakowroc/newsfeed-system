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
               logo: 'static/assets/img/es6.png', link: '/', class: 'single-news', content: 'xD',
               tag: 'web development', title: 'ECMAScript 6'
           },
            {
                logo: 'static/assets/img/ts.png', link: '/', class: 'single-news', content: 'xD',
                tag: 'web development', title: 'TypeScript'
            },  
            {
                logo: 'static/assets/img/ng.png', link: '/', class: 'single-news', content: 'xD',
                tag: 'web development', title: 'Angular 2'
            }
            
        ]
    }
}