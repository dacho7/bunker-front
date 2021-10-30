import { Data } from "@angular/router"

export class Sale {
  product: string
  phone: string
  address: string
  email: string
  quantity: number
  name: string
  dateCreated: Data

  constructor(name: string,product: string, quantity: number,phone: string, address: string,email: string){
    this.name = name;
    this.product= product;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.quantity = quantity;
    this.dateCreated = new Date()
  }
}
