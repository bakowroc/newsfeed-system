import {Component} from '@angular/core';
 

@Component ({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export default class WeatherComponent{
    searchValue: string;
} 