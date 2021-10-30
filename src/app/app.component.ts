import { Component } from '@angular/core';


import { Sale } from './app.sale';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  product: string;
  phone: string;
  address: string;
  email: string;
  objectoRes: string;
  quantity: number;
  name: string;

  constructor(){
    this.product = '321';
    this.phone = "3233382259";
    this.address = "los heroes casa 2 aple x";
    this.email = "";
    this.objectoRes = "";
    this.quantity = 1;
    this.name= "david";
  }

  async registerSale(){
    const sale = new Sale(this.name, this.product, this.quantity,this.phone, this.address, this.email)
    try {
      //const res = await fetch(`https://bnkdb-fda9b-default-rtdb.firebaseio.com/${sale.id}/sales.json`, {
      const res = await fetch("https://bnkdb-fda9b-default-rtdb.firebaseio.com/sales.json", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sale)
      });
      const resultDB = await res.json();
      this.objectoRes = JSON.stringify(resultDB);
      console.log(this.objectoRes, typeof resultDB);
    }catch(e){
      console.log(e);
    }

  };

}
