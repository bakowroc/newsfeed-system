import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import AppComponent from './app.component';
import MainPageComponent from './main-page/main-page.component';
import AboutComponent from './about/about.component';
import TrendingComponent from './trending/trending.component';
import SignInComponent from './sign-in/sign-in.component';
import RegisterComponent from './register/register.component';
import NewsPageComponent from './news-page/news-page.component';

export const router: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: MainPageComponent},
    { path: 'about', component: AboutComponent},
    { path: 'trending', component: TrendingComponent},
    { path: 'sign-in', component: SignInComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'news', component: NewsPageComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);