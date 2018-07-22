import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { ListaSubredditComponent } from './lista-subreddit/lista-subreddit.component';


const routes: Routes = [
  {
    path: 'home',
      component: BarraSuperiorComponent,
      children: 
      [
        {
            path: 'reddit',
            component : ListaSubredditComponent 
        },
      ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedditRoutingModule { }
