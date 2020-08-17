import { Component, OnInit } from '@angular/core';
import { ProductoModels } from '../../../models/producto.models';
import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  Productos:ProductoModels[]=[];
  constructor(private service:ProductoService) {

  }

  ngOnInit(): void {
    this.service.getAll().subscribe(resp=>{
      console.log(resp);
      this.Productos=resp;
    })
  }

  eliminar(producto: ProductoModels, i:number){
    Swal.fire({
      title:'Eliminar',
      icon : 'error',
      text: `¿Desea Eliminar ${producto.nombreP}?`,
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonColor: '#FF0000',
      cancelButtonText: 'No'
    }).then(resp=>{
      if(resp.value){
        this.service.deleted(producto.idProducto).subscribe();
        this.Productos.splice(i,1);
      }
    });

  }

}
