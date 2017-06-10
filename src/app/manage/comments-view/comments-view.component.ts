import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'comments-view',
    templateUrl: './comments-view.component.html',
    styleUrls: ['./comments-view.component.scss']
})

export default class CommentsViewComponent{
    @Input() show;
    constructor() {}
} 