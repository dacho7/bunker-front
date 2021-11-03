import { Component, OnInit } from '@angular/core';

import { Supplie } from '../../models/supplie';
import { SupplieService } from '../../services/supplies.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css'],
})
export class SuppliesComponent implements OnInit {
  description!: string;
  totalPrice!: number;
  quantity!: number;
  expireDate!: Date;

  constructor(private _supplieService: SupplieService) {}

  ngOnInit(): void {}

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
