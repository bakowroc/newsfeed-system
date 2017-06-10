import {Component, Input} from '@angular/core';
 

@Component ({
    selector: 'categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})

export default class CategoriesComponent{
    @Input() show;
    constructor() {}
} 