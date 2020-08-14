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
}
