import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ClienteModels } from '../models/cliente.models';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string;
  constructor(private http:HttpClient) {
    this.url='http://localhost:8080/clientes'
   }

   public getAll(){
     return this.http.get(`${this.url}/`).pipe(map(this.crearArreglo));
   }

   private crearArreglo(clientesObj:object){
    const clientes: ClienteModels[]=[];
    if(clientesObj=== null){return [];}
    Object.keys(clientesObj).forEach(id=>{
      const cliente:ClienteModels =clientesObj[id];
      clientes.push(cliente);
    })
    return clientes;
  }

  public create(cliente:ClienteModels){
    return this.http.post(`${this.url}/`,cliente);
  }

  public deleted($id){
    return  this.http.delete(`${this.url}/${$id}`);
  }
}
