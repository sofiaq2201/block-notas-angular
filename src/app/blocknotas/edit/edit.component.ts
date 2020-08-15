import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { BlockNota } from '../../modelo/BlockNota';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  blocknota: BlockNota = new BlockNota();
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.getOneNota();
  }
  getOneNota(){
    let id = localStorage.getItem("id");
    this.service.getNotaById(+id)
      .subscribe( data =>
        {
          this.blocknota = data;
        });
  }

  updateNota(blocknota:BlockNota){
    this.service.updateBlockNota(blocknota)
      .subscribe( data => {
        this.blocknota = data;
        alert("Se actualizo con exito");
        this.router.navigate(["listar"]);
      })
  }
}
