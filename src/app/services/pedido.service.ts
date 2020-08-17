import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PedidoModels } from '../models/Pedido.models';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url:string;
  constructor(private http:HttpClient) {
    this.url='http://localhost:8080/pedidos'
   }

   public getAll(){
     return this.http.get(`${this.url}/`).pipe(map(this.crearArreglo));
   }

   private crearArreglo(pedidosObj:object){
    const pedidos: PedidoModels[]=[];
    if(pedidosObj=== null){return [];}
    Object.keys(pedidosObj).forEach(id=>{
      const pedido:PedidoModels =pedidosObj[id];
      pedidos.push(pedido);
    })
    return pedidos;
  }

  public create(pedido:PedidoModels){
    return this.http.post(`${this.url}/`,pedido);
  }
}
