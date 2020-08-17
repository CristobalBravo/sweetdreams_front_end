import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ClienteService } from '../../../services/cliente.service';
import { ClienteModels } from '../../../models/cliente.models';
import { ProductoService } from '../../../services/producto.service';
import { ProductoModels } from '../../../models/producto.models';
import { PedidoService } from 'src/app/services/pedido.service';
import { PedidoModels } from '../../../models/Pedido.models';
import { VentaModels } from '../../../models/venta.models';
import { VentaService } from '../../../services/venta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {
  venta = new VentaModels();
  pedido = new PedidoModels();
  clienteEncontrado:boolean;
  cliente:ClienteModels;
  productos:any[]=[];
  productoSeleccionado= new ProductoModels();
  productosSeleccionado=[];
  cantidades=[];
  totalUnitario=[];
  total:number;
  constructor(
    private serviceCliente:ClienteService,
    private productoService:ProductoService,
    private pedidosService:PedidoService,
    private ventaService:VentaService,
    private router:Router) {
      this.total=0;
    this.clienteEncontrado=false;
  }

  ngOnInit(): void {
  }

  buscar(rut:String){
    rut.includes('-');
    console.log(rut.includes('-'));
    if (!rut.includes('-')){
      Swal.fire({
        icon:'error',
        title:'Oops',
        text: 'Rut mal escrito falta el guión'
      });
      return;
    }
    this.serviceCliente.buscarPorRut(rut).subscribe((resp:ClienteModels)=>{
      if (resp===null){
        Swal.fire({
          icon:'error',
          title:'Oops',
          text: 'No Existe El Rut'
        });
        return;
      }

      this.clienteEncontrado=true;
      this.cliente=resp
      this.productoService.getAll().subscribe((resp:any)=>{
        console.log(resp)
        this.productos=resp
      });
      console.log(this.productos);
      console.log(this.cliente);
    })

  }
  agregar(cantidad){
    let posicion= this.productoSeleccionado.idProducto - 1;
    this.productosSeleccionado.push(this.productos[posicion]);
    this.cantidades.push(cantidad);
    let totalUnitario=cantidad*this.productos[posicion].precio;
    this.totalUnitario.push(totalUnitario);
    this.total=this.total+ totalUnitario;
    console.log(cantidad);
    console.log(this.cantidades);
    console.log(this.totalUnitario);
  }
  eliminarProducto(posicion){
    this.total=this.total-this.totalUnitario[posicion];
    this.productosSeleccionado.splice(posicion,1);
    this.totalUnitario.splice(posicion,1);
    this.cantidades.splice(posicion,1);
  }
  guardar(fecha){
    if(this.total===0){
        Swal.fire({
          icon:'error',
          title:'Oops',
          text: 'No haz seleccionado un producto'
        });
        return;
    }
    this.pedido.cliente= this.cliente;
    this.pedido.fechaEntrega=fecha;
    console.log(this.total);
    this.pedido.totalPedido=this.total;

    this.pedidosService.create(this.pedido).subscribe((resp:any)=>{
      console.log(resp);
      for(let i=0; i<this.productosSeleccionado.length;i++){
        this.venta.producto= this.productosSeleccionado[i];
        this.venta.cantidadProducto= this.cantidades[i];
        this.venta.precioVenta= this.totalUnitario[i];
        this.venta.pedido=resp;
        console.log(this.venta);
        this.ventaService.create(this.venta).subscribe(resp=>{
          console.log(resp);
        })
      }
    })
    Swal.fire({
      title:'Creado',
      icon : 'success',
      text: `Se a creado el Pedido correctamente`,
    }).then(resp=>{
      if(resp.value){
        this.router.navigateByUrl('/pedidos/listar')
      }
    });
  }
}
