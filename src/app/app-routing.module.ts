import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './components/cliente/clientes/clientes.component';
import {CrearComponent} from './components/cliente/crear/crear.component';
import {ListarComponent} from './components/producto/listar/listar.component';
import {CrearProductoComponent} from './components/producto/crear-producto/crear-producto.component';

const routes: Routes = [
  {path:'clientes/listar',component:ClientesComponent},
  {path:'clientes/crear',component:CrearComponent},

  {path:'producto/listar',component:ListarComponent},
  {path:'producto/crear',component:CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
