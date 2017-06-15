import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import AppComponent from './app.component';
import MainPageComponent from './main-page/main-page.component';
import AboutComponent from './about/about.component';
import TrendingComponent from './trending/trending.component';
import SignInComponent from './sign-in/sign-in.component';
import RegisterComponent from './register/register.component';
import NewsPageComponent from './news-page/news-page.component';
import SettingsComponent from './settings/settings.component';

import ManageComponent from './manage/manage.component';
import PostsComponent from './manage/posts/posts.component';
import AddPostComponent from './manage/add-post/add-post.component';
import CategoriesComponent from './manage/categories/categories.component';
import AddTagComponent from './manage/add-tag/add-tag.component';
import CommentsViewComponent from './manage/comments-view/comments-view.component';
import GroupsComponent from './manage/groups/groups.component';
import UsersComponent from './manage/users/users.component';

export const router: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', component: MainPageComponent},
    { path: 'about', component: AboutComponent},
    { path: 'trending', component: TrendingComponent},
    { path: 'sign-in', component: SignInComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'news/:id/:slug', component: NewsPageComponent},
    { path: 'manage', component: ManageComponent,
        children: [
            { path: '', redirectTo: 'posts', pathMatch: 'full'},
            { path: 'posts', component: PostsComponent},
            { path: 'add-post', component: AddPostComponent},
            { path: 'tags', component: CategoriesComponent},
            { path: 'add-tag', component: AddTagComponent},
            { path: 'comments', component: CommentsViewComponent},
            { path: 'groups', component: GroupsComponent},
            { path: 'users', component: UsersComponent},
        ]},
    { path: 'settings', component: SettingsComponent}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
