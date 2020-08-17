import { ClienteModels } from '../models/cliente.models';
import { ProductoModels } from '../models/producto.models';
import { VentaModels } from './venta.models';

export class PedidoModels{
  idPedido:number;
  fechaEntrega:Date;
  totalPedido:number;
  cliente:ClienteModels;
  venta:VentaModels[];

}
