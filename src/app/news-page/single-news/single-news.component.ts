import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component ({
    selector: 'single-news',
    templateUrl: './single-news.component.html',
    styleUrls: ['./single-news.component.scss']
})

export default class SingleNewsComponent implements OnChanges {
    current_user: Object;
    mark: Object = {};
    @Input()
        SingleNews: any = {};
    @Input()
        newsIdInput: number;

    constructor(private auth: AuthService, private API: ApiService){}
    
    ngOnInit(){
        this.auth.getLoggedStatus()
                    .subscribe((response)=>this.current_user = response);
    }

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
