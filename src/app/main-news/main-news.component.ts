import {Component} from '@angular/core';
  
 
@Component ({
     selector: 'main-news',
     templateUrl: './main-news.component.html',
     styleUrls: ['./main-news.component.scss']
 })
 
 export default class MainNewsComponent{
     searchValue: string;
 }