import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../shared/interface/personaje.interface';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  personajes: Personaje[] = [
    { nombre: 'Wiss', poder: 12000000000000000 },
    { nombre: 'Bills', poder: 12000000000000 },
    { nombre: 'Goku', poder: 1500000 },
    { nombre: 'Vegeta', poder: 1490000 },
    { nombre: 'Krillin', poder: 120 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1200
  }

  agregarNuevoPersonaje(event:Personaje){
    this.personajes.push(event)
  }



}
