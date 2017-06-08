import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import AppComponent from './app.component';
import MainPageComponent from './main-page/main-page.component';
import AboutComponent from './about/about.component';
import TrendingComponent from './trending/trending.component';
import SignInComponent from './sign-in/sign-in.component';
import RegisterComponent from './register/register.component';
import NewsPageComponent from './news-page/news-page.component';
import ManageComponent from './manage/manage.component';
import SettingsComponent from './settings/settings.component';

export const router: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: MainPageComponent},
    { path: 'about', component: AboutComponent},
    { path: 'trending', component: TrendingComponent},
    { path: 'sign-in', component: SignInComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'news/:id/:slug', component: NewsPageComponent},
    { path: 'manage', component: ManageComponent},
    { path: 'settings', component: SettingsComponent}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
