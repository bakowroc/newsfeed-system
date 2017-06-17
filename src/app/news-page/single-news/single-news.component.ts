import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component ({
    selector: 'single-news',
    templateUrl: './single-news.component.html',
    styleUrls: ['./single-news.component.scss']
})

export default class SingleNewsComponent implements OnChanges {
    mark: Object = {};
    @Input()
        SingleNews: any = {};
    @Input()
        newsIdInput: number;

    constructor(private API: ApiService){}

    addMark(){
        this.mark['news'] = this.newsIdInput;

        console.log(this.mark);

        this.API.post('marks', this.mark)
                .subscribe((response)=>{
                })
    }
    ngOnChanges(){
        console.log(this.SingleNews);
    }

}
