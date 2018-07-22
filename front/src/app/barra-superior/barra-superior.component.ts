import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  
  constructor(private service: ServiciosService, private router: Router) 
  {
   
  }

  logOut()
  {
  
  }

  ngOnInit() {
  }

}


