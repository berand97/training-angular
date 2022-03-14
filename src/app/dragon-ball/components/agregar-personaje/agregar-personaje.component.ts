import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../shared/interface/personaje.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.scss']
})
export class AgregarPersonajeComponent implements OnInit {

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() nuevo: Personaje = {
    nombre: 'Gohan', poder: 1200000
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }





}
