import {Component, Input} from '@angular/core';


@Component ({
    selector: 'single-trend',
    templateUrl: './single-trend.component.html',
    styleUrls: ['./single-trend.component.scss']
})

export default class SingleTrendComponent {
    @Input() singleTrend: Object;

    constructor(){}

    createSlugFromTitle(title: string): string{

        return title.toLowerCase().split(' ').join('-');

    }

    cutText(length: number, text: string){
        return text.slice(0, length) + '...';
    }

}
