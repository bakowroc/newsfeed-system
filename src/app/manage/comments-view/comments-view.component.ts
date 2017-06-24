import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component ({
    selector: 'comments-view',
    templateUrl: './comments-view.component.html',
    styleUrls: ['./comments-view.component.scss']
})

export default class CommentsViewComponent{
    @Input() show;

    current_user: any;
    com: any;
    constructor(private API: ApiService, private auth: AuthService){}
    ngOnInit(){
        this.comLoad();
        this.auth.checkLoggedStatus();
        this.auth.getLoggedStatus()
                    .subscribe((response)=>{
                        this.current_user = response;

        });
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
