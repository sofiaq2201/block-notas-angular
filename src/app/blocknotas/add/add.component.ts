import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { BlockNota } from '../../modelo/BlockNota';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }
  blocknota: BlockNota = new BlockNota();

  saveNote(blocknota: BlockNota){
    if(!blocknota.title){
      blocknota.title = "";
    }
    if(!blocknota.description){ 
      blocknota.description = "";
    }
    if(blocknota.description==""&&blocknota.title==""){
      alert("Completa un campo");
    }else{
      this.service.createNote(blocknota)
      .subscribe(data => { 
        alert("se agrego con exito");
        this.router.navigate(["listar"]);
      });
    }
    
  }
  

}
