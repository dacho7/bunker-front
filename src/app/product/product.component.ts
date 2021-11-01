import { ProductService } from './../services/products.service';
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

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  async registerProduct() {
    const utility = this.salePrice - this.productionCost -this.costPrice
    const product: Product = {
      description: this.description,
      supplies!: this.supplies,
      costPrice: this.costPrice,
      productionCost: this.productionCost,
      salePrice: this.salePrice,
      utility: utility
    }
    this._productService.registerProduct(product).then((res) => {
      this.cleanFields(  )
    }).catch( err => console.log(err))
  }

  cleanFields(){
    this.description = "";
    this.costPrice = 0;
    this.productionCost = 0;
    this.salePrice = 0;
  }

}
