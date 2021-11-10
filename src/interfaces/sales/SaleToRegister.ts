import { ProductToSale } from './../products/ProductToSale';
export interface SaleToRegister {
  client: string;
  product: ProductToSale;
  quantity: number;
  price: number;
  payMethod: string; //Efectivo, Nequi, Daviplata
  phone: string;
  address: string;
  email: string;
  state: string; //"En preparacion(default), En Espera, Cancelado, Enviado(esta pago), Fiado"
  dateCreated: string;
}
