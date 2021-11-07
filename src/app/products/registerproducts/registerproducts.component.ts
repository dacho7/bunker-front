import { SupplieForProduct } from './../../../interfaces/sales/supplies/SupplieForProduct';
import { SupplieToView } from './../../../interfaces/sales/supplies/SupplieToView';

import { SupplieService } from './../../services/supplies.service';
import { ProductToRegister } from './../../../interfaces/sales/products/ProductsToRegister';
import { ProductService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registerproducts',
  templateUrl: './registerproducts.component.html',
  styleUrls: ['./registerproducts.component.css']
})
export class RegisterproductsComponent implements OnInit {

  descriptionProduct!: string;
  descriptionForPublic = '';
  descriptionSupplie = '';
  costPrice = 0;
  productionCost!: number;
  salePrice: number = 0;
  allSupplies: Array<SupplieToView> = [];
  quantity = 0;
  id = '';

  supplies: Array<SupplieForProduct> = [];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private _productService: ProductService,
    private _supplieService: SupplieService
  ) {}

  ngOnInit(): void {
    this._supplieService.listAllSupplies().subscribe((doc: any) => {
      this.allSupplies = [];
      doc.forEach((element: any) => {
        const supplie: SupplieToView = {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
        this.allSupplies.push(supplie);
      });
    });
  }

  async registerProduct() {
    const utility = this.salePrice - this.productionCost - this.costPrice;
    const product: ProductToRegister = {
      descriptionProduct: this.descriptionProduct,
      descriptionForPublic: this.descriptionForPublic,
      supplies: this.supplies,
      costPrice: this.costPrice,
      productionCost: this.productionCost,
      salePrice: this.salePrice,
      utility: utility,
    };
    this._productService
      .registerProduct(product)
      .then((res) => {
        this.supplies = [];
        this.cleanFields();
      })
      .catch((err) => console.log(err));
  }

  registerSupplie() {
    if (!this.quantity) {
      this.quantity = 1;
    }
    this.allSupplies.forEach((supp) => {
      if (this.descriptionSupplie == supp.description) {
        this.supplies.push({
          id: supp.id,
          description: supp.description,
          amount: this.quantity,
          price: this.quantity * supp.unitPrice,
        });
        this.costPrice += this.quantity * supp.unitPrice;
        this.quantity = 0;
        this.descriptionSupplie = '';
      }
    });
  }

  deleteSupplie(id: number, price: number) {
    let rs = this.supplies.splice(id, 1);
    if (rs) {
      this.costPrice = this.costPrice - price;
    }
    if (this.supplies.length == 0) {
      this.costPrice = 0;
    }
  }

  cleanFields() {
    this.descriptionProduct = '';
    this.descriptionForPublic = '';
    this.costPrice = 0;
    this.productionCost = 0;
    this.salePrice = 0;
  }

}
