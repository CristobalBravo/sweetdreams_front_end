import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VentaModels } from '../models/venta.models';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url:string;
  constructor(private http:HttpClient) {
    this.url='http://localhost:8080/pedidos/ventas'
   }

   public getAll(){
     return this.http.get(`${this.url}/`).pipe(map(this.crearArreglo));
   }

   private crearArreglo(ventasObj:object){
    const ventas: VentaModels[]=[];
    if(ventasObj=== null){return [];}
    Object.keys(ventasObj).forEach(id=>{
      const venta:VentaModels =ventasObj[id];
      ventas.push(venta);
    })
    return ventas;
  }

  public create(venta:VentaModels){
    return this.http.post(`${this.url}/`,venta);
  }
}

