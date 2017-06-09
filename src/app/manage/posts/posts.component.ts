import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})

export default class PostsComponent{
    @Input() show;
    constructor() {}
} 