import { SupplieService } from './../../services/supplies.service';
import { ProductService } from '../../services/products.service';
import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { Supplie } from './../../models/supplie';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  description!: string;
  supplies!: string;
  costPrice!: number;
  productionCost!: number;
  salePrice!: number;
  products: Array<any> = [];
  productsSelect = '';
  quantity = 0;

  constructor(
    private _productService: ProductService,
    private _supplieService: SupplieService
  ) {}

  ngOnInit(): void {
    this._supplieService.listAllSupplies().subscribe((doc) => {
      this.products = [];
      doc.forEach((element: any) => {
        const supplie: Supplie = {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
        this.products.push(supplie);
      });
      console.log(this.products);
    });
  }

  async registerProduct() {
    const utility = this.salePrice - this.productionCost - this.costPrice;
    const product: Product = {
      description: this.description,
      supplies: this.supplies,
      costPrice: this.costPrice,
      productionCost: this.productionCost,
      salePrice: this.salePrice,
      utility: utility,
    };
    this._productService
      .registerProduct(product)
      .then((res) => {
        this.cleanFields();
      })
      .catch((err) => console.log(err));
  }

  prints() {
    console.log(this.productsSelect);
  }

  cleanFields() {
    this.description = '';
    this.costPrice = 0;
    this.productionCost = 0;
    this.salePrice = 0;
  }
}
