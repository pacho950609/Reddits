import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { Subreddit } from '../subreddit.model';

@Component({
  selector: 'app-lista-subreddit',
  templateUrl: './lista-subreddit.component.html',
  styleUrls: ['./lista-subreddit.component.scss']
})
export class ListaSubredditComponent implements OnInit {

   subreddits : Subreddit[] ;
   seleccion : Subreddit ;
   comments : Subreddit[]  ;
   after : string ;
   p : number ;
   pageSize: number = 4 ;

  constructor(private service: ServiciosService)
   { 
    this.service.listaSubreddits().subscribe(ress =>
      {
        this.subreddits = ress['data']['children'];
        this.after = ress['data']['after']
      });
   }

   seleccionar(selecionado)
   { 
      this.seleccion=selecionado;

      this.service.subreddit(selecionado.data.url).subscribe(ress =>
        {
          this.comments = ress['data']['children'];
        });

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

   cargarMas()
  {
    if( this.p  == Math.ceil(this.subreddits.length / this.pageSize) )
    {
      this.service.siguienteListaSubreddits(this.subreddits.length ,this.after).subscribe(ress =>
        {
          let list =  ress['data']['children'];
          list.forEach(element => {
            this.subreddits.push(element);
          }); 
          this.after = ress['data']['after']
        });
    }
    
    
  }


  ngOnInit() {
  }

}
