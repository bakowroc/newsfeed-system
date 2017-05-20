import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'single-news',
    templateUrl: './single-news.component.html',
    styleUrls: ['./single-news.component.scss']
})

export default class SingleNewsComponent {
    @Input() singleNews: Object;
}