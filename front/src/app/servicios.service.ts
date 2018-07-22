import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiciosService {

  constructor(private http : HttpClient) 
  {
  
  }

  listaSubreddits()
  {
    return this.http.get('https://www.reddit.com/subreddits.json');
  }

  siguienteListaSubreddits(numero,next)
  {
    console.log("numero");
    console.log(numero);
    console.log("next");
    console.log(next);
    return this.http.get('https://www.reddit.com/subreddits.json?count='+numero+'&after='+next);
  }


  subreddit(name)
  {
    return this.http.get('https://www.reddit.com'+name+'.json');
  }

  

}
