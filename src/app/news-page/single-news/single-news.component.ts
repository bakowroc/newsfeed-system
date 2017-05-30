import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component ({
    selector: 'single-news',
    templateUrl: './single-news.component.html',
    styleUrls: ['./single-news.component.scss']
})

export default class SingleNewsComponent {
    searchValue: string;
} 