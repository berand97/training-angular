import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { HeroeComponent } from './heroe/heroe.component';

const routes: Routes = [
  { path: 'contador', component: ContadorComponent },
  { path: 'heroe', component: HeroeComponent },
  { path: 'directivas', component: DirectivasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EjerciciosRoutingModule { }
