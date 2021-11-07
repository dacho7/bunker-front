import { SupplieToRegister } from './../../../interfaces/sales/supplies/SupplieToRegister';
import { SupplieService } from './../../services/supplies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registersupplie',
  templateUrl: './registersupplie.component.html',
  styleUrls: ['./registersupplie.component.css']
})
export class RegistersupplieComponent implements OnInit {

  description!: string;
  totalPrice!: number;
  quantity!: number;
  expireDate!: Date;

  constructor(private _supplieService: SupplieService) {}

  ngOnInit(): void {}

  async registerSupplie() {
    const unitPrice = parseFloat((this.totalPrice / this.quantity).toFixed(2));
    const supplie: SupplieToRegister = {
      description: this.description,
      unitPrice: unitPrice,
      quantity: this.quantity,
      expireDate: this.expireDate,
    };
    this._supplieService
      .registerSupplie(supplie)
      .then(() => {
        this.cleanFields();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  cleanFields() {
    this.description = '';
    this.totalPrice = 0;
    this.quantity = 0;
    this.expireDate = new Date();
  }

}
