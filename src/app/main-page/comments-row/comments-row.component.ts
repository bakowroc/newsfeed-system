import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component ({
    selector: 'comments-row',
    templateUrl: './comments-row.component.html',
    styleUrls: ['./comments-row.component.scss']
})

export default class CommentsRowComponent implements OnInit{

    comments: any;

    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('comments')
                .subscribe((response)=> {this.comments = response; this.comments = this.comments.reverse()});

    }
}
