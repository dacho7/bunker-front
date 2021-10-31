import { Component, OnInit } from '@angular/core';

import { Product } from '../class/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  description!: string;
  supplies!: string;
  costPrice!: number;
  productionCost!: number;
  salePrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

  async registerProduct() {
    const utility = this.salePrice - this.productionCost -this.costPrice
    const product = new Product(this.description, this.supplies,this.costPrice, this.productionCost, this.salePrice, utility);
    try {
      //const res = await fetch(`https://bnkdb-fda9b-default-rtdb.firebaseio.com/${sale.id}/sales.json`, {
      const res = await fetch("https://bnkdb-fda9b-default-rtdb.firebaseio.com/products.json", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
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
    this.costPrice = 0;
    this.productionCost = 0;
    this.salePrice = 0;
  }

}
