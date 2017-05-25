import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';

import AppComponent from './app.component'
import MainPageComponent from './main-page/main-page.component'
import AboutComponent from './about/about.component'
import TrendingComponent from './trending/trending.component'
import SignInComponent from './sign-in/sign-in.component'
import NavbarComponent from './navbar/navbar.component'
import MainNewsComponent from './main-news/main-news.component'
import WeatherComponent from './weather/weather.component'
import NewsComponent from './news/news.component'
import SingleNewsComponent from './news/single-news/single-news.component'
import FullNewsPageComponent from './full-news-page/full-news-page.component'

import { ApiService } from './services/api.service'

@NgModule({

    imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            routes
           ],
    declarations: [
                AppComponent,
                MainPageComponent,
                AboutComponent,
                TrendingComponent,
                SignInComponent,
                NavbarComponent,
                MainNewsComponent,
                WeatherComponent,
                NewsComponent,
                SingleNewsComponent,
                FullNewsPageComponent,

                  ],
    providers: [
                ApiService
                ],
    bootstrap: [AppComponent]

})

export default class AppModule{}
