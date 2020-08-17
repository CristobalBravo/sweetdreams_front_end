import { PedidoModels } from '../models/Pedido.models';
import { VentaModels } from './venta.models';

export class ProductoModels{
  idProducto:number;
  nombreP: string;
  descripcion:string;
  categoria:string;
  precio:number;
  stock:number;
  venta: VentaModels[];
}
