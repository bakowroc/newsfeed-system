import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component ({
    selector: 'news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})

export default class NewsPageComponent {
    searchValue: string;
} 