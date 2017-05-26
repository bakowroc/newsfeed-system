import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'single-comment',
    templateUrl: './single-comment.component.html',
    styleUrls: ['./single-comment.component.scss']
})

export default class SingleCommentComponent{
    @Input() com: Object;
} 