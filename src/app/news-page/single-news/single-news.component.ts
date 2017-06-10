import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component ({
    selector: 'single-news',
    templateUrl: './single-news.component.html',
    styleUrls: ['./single-news.component.scss']
})

export default class SingleNewsComponent implements OnInit, OnChanges {

    @Input()
        SingleNews: any = {};

    constructor(){}

    ngOnInit() {

    }

    ngOnChanges(){
        console.log(this.SingleNews);
    }

}
