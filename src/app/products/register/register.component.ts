import { Observable } from 'rxjs';
import { Product } from './../../models/product';
import { Supplie } from './../../models/supplie';
import { SupplieService } from './../../services/supplies.service';
import { ProductService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  description!: string;
  supplies!: string;
  costPrice!: number;
  productionCost!: number;
  salePrice!: number;
  allProducts: Array<any> = [];
  products: Array<any> = [];
  productsSelect = '';
  quantity = 0;
  id = 0;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private _productService: ProductService,
    private _supplieService: SupplieService
  ) {}

  ngOnInit(): void {
    this._supplieService.listAllSupplies().subscribe((doc) => {
      this.allProducts = [];
      this.products = [];
      doc.forEach((element: any) => {
        const supplie: Supplie = {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
        this.allProducts.push(supplie);
        this.products.push(supplie);
      });
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
