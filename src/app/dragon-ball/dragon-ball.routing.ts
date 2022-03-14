import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';


const routes: Routes = [
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: '**', redirectTo: 'pagina-principal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonBallRoutingModule { }
