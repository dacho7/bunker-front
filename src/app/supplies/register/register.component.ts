import { Supplie } from './../../models/supplie';
import { SupplieService } from './../../services/supplies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}

  description!: string;
  totalPrice!: number;
  quantity!: number;
  expireDate!: Date;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private _supplieService: SupplieService) {}

  async registerSupplie() {
    const unitPrice = parseFloat((this.totalPrice / this.quantity).toFixed(2));
    const supplie: Supplie = {
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
