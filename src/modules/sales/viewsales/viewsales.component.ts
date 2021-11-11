import { SaleToView } from './../../../interfaces/sales/SaleToView';
import { SaleService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrls: ['./viewsales.component.css'],
})
export class ViewsalesComponent implements OnInit {
  dateSelect!: Date;
  total = 0;
  totalEfecty = 0;
  sales: Array<SaleToView> = [];

  constructor(private _salesService: SaleService) {
    this.listSalesForDate();
  }

  ngOnInit(): void {}

  listAllSales() {}

  listSalesForDate() {
    this._salesService.listByDay(this.dateSelect).subscribe((doc) => {
      this.sales = [];
      this.total = 0;
      this.totalEfecty = 0;
      doc.forEach((element: any) => {
        const sale: SaleToView = {
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        };
        this.sales.push(sale);
        this.total += element.payload.doc.data().product.price;
        if (element.payload.doc.data().payMethod == 'Efectivo') {
          this.totalEfecty += element.payload.doc.data().product.price;
        }
      });
    });
  }

  findSalesForDay() {
    this.listSalesForDate();
  }
}
