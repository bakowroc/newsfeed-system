import {Component} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../../app.router';

@Component ({
    selector: 'add-tag',
    templateUrl: './add-tag.component.html',
    styleUrls: ['./add-tag.component.scss'],
    providers: [ApiService]
})

export default class AddTagComponent{
tag: Object = {};

constructor(private route: ActivatedRoute, private API: ApiService, private router: Router){}
    addTag(){
        this.API.post('tags', this.tag)
                .subscribe((response)=>{
                console.log(response);
                this.go();
        })
    }
    go(){
        this.router.navigate(['../tags'], { relativeTo: this.route });
    }
}