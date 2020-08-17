import { Component, OnInit } from '@angular/core';
import { ProductoModels } from '../../../models/producto.models';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  producto = new ProductoModels();

  constructor(private service: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  public guardar(nombreP:string,descripcion:string,categoria:string,precio:number,stock:number){
    //console.log(rut,nombre,apellido,direccion,correo,telefono);
    this.producto.nombreP=nombreP;
    this.producto.descripcion=descripcion;
    this.producto.categoria=categoria;
    this.producto.precio=precio;
    this.producto.stock=stock;
    //this.producto.pedido=null;
    console.log(this.producto)

    Swal.fire({
      title:'Creado',
      icon : 'success',
      text: `Se a creado el producto ${this.producto.nombreP}  correctamente`,
    }).then(resp=>{
      if(resp.value){
        this.service.create(this.producto).subscribe(resp=>{
          console.log(resp)
        });
        this.router.navigateByUrl('/productos/listar')
      }
    });
  }

}
