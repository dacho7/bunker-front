import { SaleService } from './../../services/sales.service';
import { SaleToRegister } from './../../../interfaces/sales/SaleToRegister';
import { Component, OnInit } from '@angular/core';
import { SalesToView } from 'src/interfaces/sales/SaleToView';

@Component({
  selector: 'app-registersales',
  templateUrl: './registersales.component.html',
  styleUrls: ['./registersales.component.css'],
})
export class RegistersalesComponent implements OnInit {
  name!: string;
  product!: string;
  quantity = 1;
  payMethod = 'Efectivo';
  phone!: string;
  address!: string;
  email!: string;
  price = 2000;

  salesAvailables: Array<any> = [];

  constructor(private _saleService: SaleService) {}

  ngOnInit(): void {
    this._saleService.lisOnlyNotSend().subscribe((doc) => {
      this.salesAvailables = [];
      let salesAux: any[] = [];
      doc.forEach((element: any) => {
        const sale: SalesToView = {
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
  }

  registerSale() {
    if (!this.validateSale()) {
      return;
    } else {
      if (!this.phone) {
        this.phone = '';
      }
      if (!this.address) {
        this.address = '';
      }
      if (!this.email) {
        this.email = '';
      }
    }
    const sale: SaleToRegister = {
      client: this.name,
      product: this.product,
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
  }

  validateSale() {
    if (!this.name || !this.product || !this.quantity || !this.address) {
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
    this.product = '';
    this.quantity = 1;
    this.phone = '';
    this.address = '';
    this.email = '';
    this.payMethod = 'Efectivo';
  }
}
