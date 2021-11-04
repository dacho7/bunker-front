import { Product } from './../../models/product';
import { SupplieIn } from './../supplieIn';
import { SupplieFr } from './../../interfaces/supplieFr';
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
  descriptionForCliente = '';
  descriptionSupplie = '';
  costPrice = 0;
  productionCost!: number;
  salePrice!: number;
  allSupplies: Array<any> = [];
  products: Array<any> = [];
  productsSelect = '';
  quantity = 0;
  id = '';
  totalSupplies = 0;

  supplies: Array<SupplieIn> = [];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private _productService: ProductService,
    private _supplieService: SupplieService
  ) {}

  ngOnInit(): void {
    this._supplieService.listAllSupplies().subscribe((doc) => {
      this.allSupplies = [];
      doc.forEach((element: any) => {
        const supplie: SupplieFr = {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
        this.allSupplies.push(supplie);
      });
    });
  }

  async registerProduct() {
    const utility = this.salePrice - this.productionCost - this.costPrice;
    const product: Product = {
      description: this.description,
      descriptionForCliente: this.descriptionForCliente,
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

  registerSupplie() {
    this.allSupplies.forEach((supp) => {
      if (this.descriptionSupplie == supp.description) {
        this.supplies.push({
          id: supp.id,
          description: supp.description,
          amount: this.quantity,
          price: this.quantity * supp.unitPrice,
        });
        this.costPrice += this.quantity * supp.unitPrice;
      }
    });
  }

  deleteSupplie(id: string) {
    console.log(id);
    this.supplies.forEach((supp) => {
      if (supp.id == id) {
        this.costPrice = this.costPrice - supp.price;
      }
    });
    this.supplies = this.supplies.filter((sup) => sup.id != id);
    if (this.supplies.length == 0) {
      this.costPrice = 0;
    }
  }

  cleanFields() {
    this.description = '';
    this.costPrice = 0;
    this.productionCost = 0;
    this.salePrice = 0;
  }
}
