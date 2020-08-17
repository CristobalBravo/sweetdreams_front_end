import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { formatDate, DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ClienteService } from '../../services/cliente.service';
import { ClienteModels } from '../../models/cliente.models';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos:any[]=[];
  buscado:boolean;
  pipe = new DatePipe('en-US');
  fechasEncontradas:any[]=[];
  modal:boolean;
  cliente= new ClienteModels();
  constructor(
    private pedidoService:PedidoService,
    private clienteService:ClienteService) {
    this.buscado=false;
    this.modal=false;
  }

  ngOnInit(): void {
    this.pedidoService.getAll().subscribe((resp:any)=>{
      console.log(resp);
      this.pedidos=resp;

    })
  }
  buscar(fecha){
    this.limpiar();
    let fechatransformada=this.pipe.transform(fecha,'shortDate');
    this.pedidos.forEach(resp=>{
      if(this.pipe.transform(resp.fechaEntrega,'shortDate')===fechatransformada){
        this.fechasEncontradas.push(resp);
        this.buscado=true;
      }
    })
    if(!this.buscado){
      Swal.fire({
        icon:'error',
        title:'Oops',
        text: 'No Existe Fecha En El Sistema'
      });
      return;
    }
  }

  private limpiar(){
    this.fechasEncontradas.length=0;
    this.buscado=false;
  }

  detalle(id){
    this.clienteService.getAll().subscribe((clientes)=>{
      console.log(clientes);
      console.log(clientes[0].pedido[0].idPedido);

      clientes.forEach(resp=>{
        console.log(resp.pedido);
        for(let i=0;i<resp.pedido.length; i++){
          console.log(resp.pedido[i]);
          console.log(resp.pedido[i].idPedido===id);
          if(resp.pedido[i].idPedido===id){

            this.cliente=resp;
            Swal.fire({
              title: this.cliente.nombre + ' ' + this.cliente.apellido,
              html: '<p>'+'Rut: ' + this.cliente.rut+'</p>'
                    +'<p>'+'Telefono: '+ this.cliente.telefono+'</p>'
                    +'<p>'+'Correo: ' + this.cliente.correo+'</p>'
                    +'<p>'+ 'Dirección: '+ this.cliente.direccion+'</p>'
            })
            this.modal=true;
            console.log(this.cliente);
          }
        }
      })
    })
    //console.log(this.cliente);
  }

}
