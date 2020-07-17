import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductoModels } from '../models/producto.models';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string;
  constructor(private http: HttpClient) {
    this.url='http://localhost:8080/productos';
  }


  public getAll(){
    return this.http.get(`${this.url}/`).pipe(map(this.crearArreglo));
  }

  private crearArreglo(productoObj:object){
   const productos: ProductoModels[]=[];
   if(productoObj=== null){return [];}
   Object.keys(productoObj).forEach(id=>{
     const cliente:ProductoModels =productoObj[id];
     productos.push(cliente);
   })
   return productos;
 }

 public deleted($id){
  return  this.http.delete(`${this.url}/${$id}`);
 }

 public create(producto:ProductoModels){
  return this.http.post(`${this.url}/`,producto);
}
}
