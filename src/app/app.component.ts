import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

  listar() {
    this.router.navigate(['listar']);
  }

  add() {
    this.router.navigate(['add']);
  }
}
