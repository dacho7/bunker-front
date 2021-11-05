export class Sale {
  id?: string;
  client: string;
  product: string;
  quantity: number;
  payMethod: string;
  phone: string;
  address: string;
  email: string;
  state: string;
  price: number;

  dateCreated: Date;

  constructor(
    name: string,
    product: string,
    quantity: number,
    payMethod: string,
    phone: string,
    address: string,
    email: string,
    price: number
  ) {
    this.client = name;
    this.product = product;
    this.quantity = quantity;
    this.payMethod = payMethod;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.state = 'En Preparacion';
    this.dateCreated = new Date();
    this.price = price;
  }
}
