import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service'


@Component ({
    selector: 'add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss'],
    providers: [ApiService]
})

export default class AddCommentComponent{

    comment: Object = {};

    @Input()
        newsIdInput: number;

    @Output()
        commentBeenAdded:EventEmitter<boolean> = new EventEmitter();

    constructor(private API: ApiService){}

    addComment(){
        this.comment['author'] = 1;
        this.comment['related_news'] = this.newsIdInput;

        console.log(this.comment);

        this.API.post('comments', this.comment)
                .subscribe((response)=>{
                     this.commentBeenAdded.emit(true);
                })
    }
}
