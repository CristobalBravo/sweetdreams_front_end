import { ClienteModels } from '../models/cliente.models';
import { ProductoModels } from '../models/producto.models';

export class PedidoModels{
  idPedido:number;
  cliente:ClienteModels;
  fechaEntrega:Date;
  productos:ProductoModels[];

}
