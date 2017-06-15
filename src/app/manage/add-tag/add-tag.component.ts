import {Component} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component ({
    selector: 'add-tag',
    templateUrl: './add-tag.component.html',
    styleUrls: ['./add-tag.component.scss'],
    providers: [ApiService]
})

export default class AddTagComponent{
tag: Object = {};

constructor(private API: ApiService){}
  addTag(){
        this.API.post('tags', this.tag)
                .subscribe((response)=>{
                console.log(response);
        })
    }
} 



