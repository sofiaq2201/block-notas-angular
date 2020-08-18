import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockNota } from '../modelo/BlockNota';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8080/blocknotas/';
  
  getNotas() {
    return this.http.get<BlockNota[]>(this.url);
  }

  createNote(blocknota: BlockNota){
    return this.http.post<BlockNota>(this.url, blocknota);
  }

  getNotaById(id:number){
    let pathUri = this.url + id;
    return this.http.get<BlockNota>(pathUri);
  }

  updateBlockNota(blockNota:BlockNota){
    let pathUri = this.url + blockNota.id;
    return this.http.put<BlockNota>(this.url, blockNota);
  }

  deleteBlockNota(blocknota:BlockNota){
    let pathUri = this.url + blocknota.id;
    return this.http.delete<BlockNota>(pathUri);
  }
}
