import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component ({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})

export default class CommentsComponent implements OnInit{
    comments: Array<Object>;
    
    
    constructor(){}
    ngOnInit(){
        this.comments = [
           {
               date: '25.05.2017', author: 'Ja', content: 'Bardzo ladnie'
           }, {
               date: '25.05.2017', author: 'Ja2', content: 'Wspaniale'
           }, {
               date: '25.05.2017', author: 'Ja3', content: 'Serdecznie polecam'
           }
            
        ]
    }
} 