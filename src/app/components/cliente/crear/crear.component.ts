import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteModels } from '../../../models/cliente.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  cliente = new ClienteModels();

  constructor(private service:ClienteService, private router : Router) {
  }

  ngOnInit(): void {
  }

  public guardar(rut:string,nombre:string,apellido:string,direccion:string,correo:string,telefono:string){
    //console.log(rut,nombre,apellido,direccion,correo,telefono);
    this.cliente.rut=rut;
    this.cliente.nombre=nombre;
    this.cliente.apellido=apellido;
    this.cliente.direccion=direccion;
    this.cliente.correo=correo;
    this.cliente.telefono=telefono;
    this.cliente.pedido=[];
    console.log(this.cliente)

    Swal.fire({
      title:'Creado',
      icon : 'success',
      text: `Se a creado el cliente ${this.cliente.nombre} ${this.cliente.apellido} correctamente`,
    }).then(resp=>{
      if(resp.value){
        this.service.create(this.cliente).subscribe(resp=>{
          console.log(resp)
        });
        this.router.navigateByUrl('/clientes/listar')
      }
    });
  }
}
