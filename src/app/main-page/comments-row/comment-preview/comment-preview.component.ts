import {Component, Input} from '@angular/core';


@Component ({
    selector: 'comment-preview',
    templateUrl: './comment-preview.component.html',
    styleUrls: ['./comment-preview.component.scss']
})

export default class CommentPreviewComponent {
    @Input() comment: Object;

    constructor(){}

    createSlugFromTitle(title: string): string{

        return title.toLowerCase().split(' ').join('-');

    }

}
