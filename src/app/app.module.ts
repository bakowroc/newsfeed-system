import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';

import { SortPipe } from './sort-by.pipe'
import { TruncatePipe } from './limit-to.pipe'

import AppComponent from './app.component'
import MainPageComponent from './main-page/main-page.component'
import MainNewsComponent from './main-page/main-news/main-news.component'
import WeatherComponent from './main-page/weather/weather.component'
import NewsRowComponent from './main-page/news-row/news-row.component'
import CommentsRowComponent from './main-page/comments-row/comments-row.component'
import CommentPreviewComponent from './main-page/comments-row/comment-preview/comment-preview.component'
import MiniNewsComponent from './main-page/news-row/mini-news/mini-news.component'

import NavbarComponent from './navbar/navbar.component'
import TrendingComponent from './trending/trending.component'
import SingleTrendComponent from './trending/single-trend/single-trend.component'
import SignInComponent from './sign-in/sign-in.component'
import RegisterComponent from './register/register.component'

import ManageComponent from './manage/manage.component'
import PostsComponent from './manage/posts/posts.component'
import AddPostComponent from './manage/add-post/add-post.component'
import EditPostComponent from './manage/edit-post/edit-post.component'
import CategoriesComponent from './manage/categories/categories.component'
import AddTagComponent from './manage/add-tag/add-tag.component'
import CommentsViewComponent from './manage/comments-view/comments-view.component'
import UsersComponent from './manage/users/users.component'

import SettingsComponent from './settings/settings.component'


import NewsPageComponent from './news-page/news-page.component'
import SingleNewsComponent from './news-page/single-news/single-news.component'
import CommentsComponent from './news-page/comments/comments.component'
import AddCommentComponent from './news-page/comments/add-comment/add-comment.component'
import SingleCommentComponent from './news-page/comments/single-comment/single-comment.component'

import { ApiService } from './services/api.service'
import { AuthService } from './services/auth.service'

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
                MainNewsComponent,
                WeatherComponent,
                NavbarComponent,
                TrendingComponent,
                SingleTrendComponent,
                SignInComponent,
                RegisterComponent,
                ManageComponent,
                AddPostComponent,
                EditPostComponent,
                PostsComponent,
                CategoriesComponent,
                AddTagComponent,
                CommentsViewComponent,
                UsersComponent,
                SettingsComponent,
                NewsRowComponent,
                CommentsRowComponent,
                MiniNewsComponent,
                CommentPreviewComponent,
                NewsPageComponent,
                SingleNewsComponent,
                CommentsComponent,
                AddCommentComponent,
                SingleCommentComponent,
                SortPipe,
                TruncatePipe
                  ],
    providers: [
                ApiService,
                AuthService
                ],
    //exports: [SortPipe],
    bootstrap: [AppComponent]

})

export default class AppModule{}
