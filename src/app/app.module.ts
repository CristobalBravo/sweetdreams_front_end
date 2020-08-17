import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClientesComponent } from './components/cliente/clientes/clientes.component';
import { NavBarClienteComponent } from './components/cliente/nav-bar-cliente/nav-bar-cliente.component';
import { CrearComponent } from './components/cliente/crear/crear.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './components/producto/listar/listar.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { NavBarProductoComponent } from './components/producto/nav-bar-producto/nav-bar-producto.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CrearPedidoComponent } from './components/pedido/crear-pedido/crear-pedido.component';
import { NavBarPedidoComponent } from './components/pedido/nav-bar-pedido/nav-bar-pedido.component';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ClientesComponent,
    NavBarClienteComponent,
    CrearComponent,
    ListarComponent,
    CrearProductoComponent,
    NavBarProductoComponent,
    PedidoComponent,
    CrearPedidoComponent,
    NavBarPedidoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
