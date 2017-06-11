import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'

@Component ({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export default class WeatherComponent implements OnInit{

    weather_url: string;
    weather: Object;

    constructor(private API: ApiService){

        this.weather_url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22wroclaw%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'

        this.weather = {
            temp: '',
            text: '',
            location: {},
            pressure: '',
            forecast: []
        }

    }

    ngOnInit(){
        this.API.getWeather(this.weather_url)
                .subscribe((response)=>{
                    response = response['query']['results']['channel'];
                    this.weather['temp'] = this.toCelsius(response['item']['condition']['temp']);
                    this.weather['text'] = response['item']['condition']['text'];
                    this.weather['location'] = response['location'];
                    this.weather['pressure'] = Math.floor(response['atmosphere']['pressure']);
                    this.weather['forecast'][0] = response['item']['forecast'][1]
                    this.weather['forecast'][1] = response['item']['forecast'][2]

                    console.log(this.weather);
                });

            }
    toCelsius(temp: number){
        return Math.floor((temp - 32) / 1.8);
    }
}
