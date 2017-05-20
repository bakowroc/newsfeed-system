import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import AppComponent from './app.component'
import NavbarComponent from './navbar/navbar.component'
import MainSectionComponent from './main-section/main-section.component'
import WeatherComponent from './weather/weather.component'
import NewsComponent from './news/news.component'
import SingleNewsComponent from './news/single-news/single-news.component'

@NgModule({

    imports: [BrowserModule,
             FormsModule,
             HttpModule
           ],
    declarations: [
                AppComponent,
                NavbarComponent,
                MainSectionComponent,
                WeatherComponent,
                NewsComponent,
                SingleNewsComponent

                  ],
    providers: [
                ],
    bootstrap: [AppComponent]

})

export default class AppModule{}
