import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../shared/interface/personaje.interface';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  @Input('data') personajes: Personaje[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
