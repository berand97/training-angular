import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonBallRoutingModule } from './dragon-ball.routing';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { FormsModule } from '@angular/forms';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    ListaPersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragonBallRoutingModule
  ]
})
export class DragonBallModule { }
