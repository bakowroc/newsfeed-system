import {Component, Input} from '@angular/core';


@Component ({
    selector: 'mini-news',
    templateUrl: './mini-news.component.html',
    styleUrls: ['./mini-news.component.scss']
})

export default class MiniNewsComponent {
    @Input() miniNews: Object;

    constructor(){}

    createSlugFromTitle(title: string): string{

        return title.toLowerCase().split(' ').join('-');

    }

    cutText(length: number, text: string){
        return text.slice(0, length) + '...';
    }

}
