import {Component} from '@angular/core';
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

    constructor(private API: ApiService){}

    addComment(){
        this.comment['author'] = 3;
        this.comment['related_news'] = 4;

        console.log(this.comment);

        this.API.post('comments', this.comment)
                .subscribe((response)=>console.log(response))
    }
}
