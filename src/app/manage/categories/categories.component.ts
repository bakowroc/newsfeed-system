import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
 

@Component ({
    selector: 'categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})

export default class CategoriesComponent{
    @Input() show;
    tags: any;
    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('tags')
                .subscribe((response)=> this.tags = response);

    }
} 