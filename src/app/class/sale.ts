import { Data } from "@angular/router"

export class Sale {
  client: string
  product: string
  quantity: number
  methodPay: string
  phone: string
  address: string
  email: string

  dateCreated: Data

  constructor(name: string,product: string, quantity: number, methodPay: string,phone: string, address: string,email: string){
    this.client = name;
    this.product= product;
    this.quantity = quantity;
    this.methodPay = methodPay;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.dateCreated = new Date()
  }
}
