import { Component, OnInit } from '@angular/core';

import { Supplie } from '../class/supplie';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  description!: string;
  totalPrice!: number;
  quantity!: number;
  expireDate!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  async registerSupplie() {
    const unitPrice = parseFloat((this.totalPrice/this.quantity).toFixed(2));
    const supplie = new Supplie(this.description, unitPrice, this.quantity, this.expireDate);
    try {
      //const res = await fetch(`https://bnkdb-fda9b-default-rtdb.firebaseio.com/${sale.id}/sales.json`, {
      const res = await fetch("https://bnkdb-fda9b-default-rtdb.firebaseio.com/supplies.json", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(supplie)
      });
      const resultDB = await res.json();
      //this.objectRes = JSON.stringify(resultDB);
      this.cleanFields()
    }catch(e){
      console.log(e);
    }
  }

  cleanFields(){
    this.description = "";
    this.totalPrice = 0;
    this.quantity = 0;
    this.expireDate = new Date();
  }

}
