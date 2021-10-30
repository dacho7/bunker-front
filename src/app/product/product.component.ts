import { Component, OnInit } from '@angular/core';

import { Product } from '../class/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  description!: string;
  costPrice!: number;
  productionCost!: number;
  salePrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

  registerProduct () {
    const utility = this.salePrice - this.productionCost -this.costPrice
    const product = new Product(this.description, this.costPrice, this.productionCost, this.salePrice, utility);
  }


}
