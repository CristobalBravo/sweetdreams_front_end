import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './components/cliente/clientes/clientes.component';
import {CrearComponent} from './components/cliente/crear/crear.component';
import {ListarComponent} from './components/producto/listar/listar.component';
import {CrearProductoComponent} from './components/producto/crear-producto/crear-producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CrearPedidoComponent } from './components/pedido/crear-pedido/crear-pedido.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'clientes/listar',component:ClientesComponent},
  {path:'clientes/crear',component:CrearComponent},

  {path:'productos/listar',component:ListarComponent},
  {path:'producto/crear',component:CrearProductoComponent},

  {path:'pedidos/listar',component:PedidoComponent},
  {path:'pedido/crear',component:CrearPedidoComponent},

  {path:'home',component:HomeComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
