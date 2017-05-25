import {Component, Input} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component ({
    selector: 'full-news-page',
    templateUrl: './full-news-page.component.html',
    styleUrls: ['./full-news-page.component.scss']
})

export default class FullNewsPageComponent{
    searchValue: string;
} 