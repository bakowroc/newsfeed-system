import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})

export default class AddPostComponent{
    @Input() show;
    constructor() {}
} 