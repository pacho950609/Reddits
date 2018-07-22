import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RedditRoutingModule } from './reddit-routing.module';
import { ListaSubredditComponent } from './lista-subreddit/lista-subreddit.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RedditRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [ListaSubredditComponent, SubredditComponent]
})
export class RedditModule { }
