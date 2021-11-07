export interface SaleToRegister {
  client: string,
  product: string,
  quantity: number,
  payMethod: string, //Efectivo, Nequi, Daviplata
  phone: string,
  address: string,
  email: string,
  state: string, //"En preparacion(default), En Espera, Cancelado, Enviado(esta pago), Fiado"
  dateCreated: Date,
  price: number,
}
