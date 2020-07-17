import { PedidoModels } from '../models/Pedido.models';

export class ProductoModels{
  idProducto:number;
  nombreP: string;
  descripcion:string;
  categoria:string;
  precio:number;
  stock:number;
  pedido:PedidoModels;

}
