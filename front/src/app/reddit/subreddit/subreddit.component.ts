import { Component, OnInit , Input } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { Subreddit } from '../subreddit.model';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {

  @Input() subreddit : Subreddit  ;
  @Input() comments : Subreddit[]  ;


  constructor(private service: ServiciosService) 
  { 

  }

  ValidURL(str) : boolean
  {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) 
    {
      return false;
    } 
    else 
    {
      return true;
    }
  }

  ngOnInit() {
  }

}
