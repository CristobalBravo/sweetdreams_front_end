import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteModels } from '../../../models/cliente.models';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: ClienteModels[]=[];

  constructor(private service : ClienteService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(resp =>{
      console.log(resp);
      this.clientes=resp;
    })

  }
  eliminar(cliente: ClienteModels, i:number){
    Swal.fire({
      title:'Eliminar',
      icon : 'error',
      text: `¿Desea Eliminar a ${cliente.nombre} ${cliente.apellido}?`,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonColor: '#FF0000',
      cancelButtonText: 'No'
    }).then(resp=>{
      if(resp.value){
        this.service.deleted(cliente.id_Cliente).subscribe();
        this.clientes.splice(i,1);
      }
    });

  }

}
