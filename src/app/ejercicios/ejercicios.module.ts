import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { EjerciciosRoutingModule } from './ejercicios.routing';
import { HeroeComponent } from './heroe/heroe.component';
import { DirectivasComponent } from './directivas/directivas.component';



@NgModule({
  declarations: [
    ContadorComponent,
    HeroeComponent,
    DirectivasComponent
  ],
  imports: [
    CommonModule,
    EjerciciosRoutingModule
  ]
})
export class EjerciciosModule { }
