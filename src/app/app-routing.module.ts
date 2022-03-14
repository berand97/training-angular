import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ejercicios', loadChildren: () => import('./ejercicios/ejercicios.module').then(m => (m).EjerciciosModule) },
  { path: 'dragon-ball', loadChildren: () => import('./dragon-ball/dragon-ball.module').then(m => (m).DragonBallModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
