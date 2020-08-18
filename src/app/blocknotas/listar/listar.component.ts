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
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
        this.service.getNotas().subscribe( data => {
          this.notas = data;
          this.notas.forEach(n => {
            console.log(n.modified.toLocaleDateString);
          });
        }
      )
  }

  toEditNota(nota:BlockNota):void{
        localStorage.setItem("id", nota.id.toString());
        this.router.navigate(["edit"]);
  }
  toDeleteNota(blocknota:BlockNota){
    this.service.deleteBlockNota(blocknota)
        .subscribe( data => {
          this.notas = this.notas.filter( n => n!== blocknota);
          alert("Se elimino");
        })
  }

}
