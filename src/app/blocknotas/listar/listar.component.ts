import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { BlockNota } from '../../modelo/BlockNota';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  notas:BlockNota[];
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit() {
    this.http.getNotas().subscribe(data=>{
         this.notas = data;
        }
      )
  }

}
