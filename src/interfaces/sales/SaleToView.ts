import { ProductToSale } from './../products/ProductToSale';
export interface SaleToView {
  id: string;
  client: string;
  product: ProductToSale;
  quantity: number;
  payMethod: string; //Efectivo, Nequi, Daviplata
  phone: string;
  address: string;
  email: string;
  state: string; //"En preparacion(default), En Espera, Cancelado, Enviado(esta pago), Fiado"
  price: number;
  dateCreated: Date;
}
