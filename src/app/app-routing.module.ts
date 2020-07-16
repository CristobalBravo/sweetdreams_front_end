import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './components/cliente/clientes/clientes.component';
import {CrearComponent} from './components/cliente/crear/crear.component';

const routes: Routes = [
  {path:'clientes/listar',component:ClientesComponent},
  {path:'clientes/crear',component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
