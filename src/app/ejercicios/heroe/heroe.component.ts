import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe: string = 'Iron Man';
  edad: number = 45

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre() {
    this.heroe = 'Hulk';
  }

  cambiarEdad(){
    this.edad = 40;
  }

}
