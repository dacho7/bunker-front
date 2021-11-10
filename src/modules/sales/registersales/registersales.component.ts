import { ProductToSale } from './../../../interfaces/products/ProductToSale';
import { ProductToView } from './../../../interfaces/products/ProductsToView';
import { ProductService } from './../../services/products.service';
import { SaleService } from './../../services/sales.service';
import { SaleToRegister } from './../../../interfaces/sales/SaleToRegister';
import { Component, OnInit } from '@angular/core';
import { SaleToView } from 'src/interfaces/sales/SaleToView';

@Component({
  selector: 'app-registersales',
  templateUrl: './registersales.component.html',
  styleUrls: ['./registersales.component.css'],
})
export class RegistersalesComponent implements OnInit {
  name!: string;
  descriptionProduct = '';
  quantity = 1;
  payMethod = 'Efectivo';
  phone = '';
  address = '';
  email = '';
  price = 2000;

  productToSale!: ProductToSale;

  keyword = 'descriptionProduct';

  salesAvailables: Array<SaleToView> = [];

  allProducts: Array<ProductToView> = [];

  constructor(
    private _saleService: SaleService,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._saleService.lisOnlyNotSend().subscribe((doc) => {
      this.salesAvailables = [];
      let salesAux: any[] = [];
      doc.forEach((element: any) => {
        const sale: SaleToView = {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
        salesAux.push(sale);
      });
      //      console.log(salesAux.sort((a: Sale,b: Sale) => new Date(a.dateCreated).getTime() > new Date(b.dateCreated).getTime()));
      this.salesAvailables = salesAux.sort((a, b): any => {
        if (a.dateCreated > b.dateCreated) {
          return 1;
        }
        if (a.dateCreated < b.dateCreated) {
          return -1;
        }
      });
    });
    this._productService.listAllProducts().subscribe((doc: any) => {
      this.allProducts = [];
      doc.forEach((product: any) => {
        this.allProducts.push({
          id: product.payload.doc.id,
          ...product.payload.doc.data(),
        });
      });
    });
  }

  registerSale() {
    if (!this.validateSale()) {
      return;
    }
    const sale: SaleToRegister = {
      client: this.name,
      product: this.productToSale,
      quantity: this.quantity,
      payMethod: this.payMethod,
      phone: this.phone,
      address: this.address,
      email: this.email,
      state: 'en preparacion',
      dateCreated: new Date(),
      price: this.price,
    };
    this._saleService
      .saveSale(sale)
      .then(() => this.resetFields())
      .catch((e) => console.log(e));
    console.log(this.salesAvailables);
  }

  selectEvent(item: any) {
    this.descriptionProduct = item.description;
    this.productToSale = {
      idProduct: item.id,
      description: item.descriptionProduct,
      price: item.salePrice,
      utility: item.utility,
    };
  }

  validateSale() {
    if (
      !this.name ||
      !this.descriptionProduct ||
      !this.quantity ||
      !this.address
    ) {
      alert('Digite todos los campos');
      return false;
    }
    if (
      this.payMethod === 'Efectivo' ||
      this.payMethod === 'Nequi' ||
      this.payMethod === 'Daviplata' ||
      this.payMethod === 'Tarjeta'
    ) {
      return true;
    } else {
      alert('Ingrese un metodo de pago valido (Efectivo, Nequi, Daviplata)');
      return false;
    }
  }

  sendOrder(id: string) {
    this._saleService
      .sendOrder(id)
      .then()
      .catch((err) => console.log(err));
  }

  resetFields() {
    this.name = '';
    this.descriptionProduct = '';
    this.quantity = 1;
    this.phone = '';
    this.address = '';
    this.email = '';
    this.payMethod = 'Efectivo';
  }
}
