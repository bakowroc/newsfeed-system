import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component ({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})

export default class CommentsComponent implements OnInit{

    @Input()
        Comments: Array<Object>;


    constructor(){}
    ngOnInit(){
    }

    addComment(): void{
        console.log('submitted');
    }
}
