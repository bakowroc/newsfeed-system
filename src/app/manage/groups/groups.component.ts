import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})

export default class GroupsComponent{
    @Input() show;
    constructor() {}
} 