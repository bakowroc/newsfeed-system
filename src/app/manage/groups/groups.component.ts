import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
 

@Component ({
    selector: 'groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})

export default class GroupsComponent{
    @Input() show;
    
    groups: any;
    constructor(private API: ApiService){}
    ngOnInit(){

        this.API.get('groups')
                .subscribe((response)=> this.groups = response);

    }
     
} 