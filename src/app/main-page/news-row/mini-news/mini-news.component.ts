import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'mini-news',
    templateUrl: './mini-news.component.html',
    styleUrls: ['./mini-news.component.scss']
})

export default class MiniNewsComponent {
    @Input() miniNews: Object;
}