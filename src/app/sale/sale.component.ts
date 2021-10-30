import { Component, Input, OnInit } from '@angular/core';
import { Sale } from '../class/app.sale';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  name!: string;
  product!: string;
  quantity=1;
  phone!: string;
  address!: string;
  email!: string;

  objectRes!: any;

  constructor() {}

  ngOnInit(): void {
  }

  async registerSale(){
    if(!this.validateSale()) {
      return
    } else {
      if(!this.phone){
        this.phone = ""
      }
      if(!this.address){
        this.address = ""
      }
      if(!this.email){
        this.email = ""
      }
      const sale = new Sale(this.name, this.product, this.quantity,this.phone, this.address, this.email)
      try {
        //const res = await fetch(`https://bnkdb-fda9b-default-rtdb.firebaseio.com/${sale.id}/sales.json`, {
        const res = await fetch("https://bnkdb-fda9b-default-rtdb.firebaseio.com/sales.json", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sale)
        });
        const resultDB = await res.json();
        //this.objectRes = JSON.stringify(resultDB);
        this.cleanFields()
      }catch(e){
        console.log(e);
      }
    }
  };

  validateSale(){
    if (!this.name || !this.product || !this.quantity ){
      return false
    }
    return true
  }

  cleanFields(){
    this.name = "";
    this.product = "";
    this.quantity = 1;
    this.phone = "";
    this.address = "";
    this.email = "";
  }

}
