import {Component, Input, OnInit} from '@angular/core';


@Component ({
    selector: 'single-comment',
    templateUrl: './single-comment.component.html',
    styleUrls: ['./single-comment.component.scss']
})

export default class SingleCommentComponent implements OnInit{

    @Input()
    comment: Object;

    constructor(){}

    ngOnInit(){}
}
