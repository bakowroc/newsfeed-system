import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component ({
    selector: 'comments-view',
    templateUrl: './comments-view.component.html',
    styleUrls: ['./comments-view.component.scss']
})

export default class CommentsViewComponent{
    @Input() show;
    com: any;
    constructor(private API: ApiService){}
    ngOnInit(){
        this.comLoad();
        
    }
    comDelete(id: number){

        const confirmation = confirm('This comment will be removed');

        if(confirmation)
            this.API.delete('comments', id)
                    .subscribe((response)=>{
                        console.log(response);
                        this.comLoad();
                    });
    }
    comLoad(){
        this.API.get('comments')
            .subscribe((response)=> this.com = response);

    }
} 