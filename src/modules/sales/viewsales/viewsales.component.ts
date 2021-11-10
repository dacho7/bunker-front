import { SaleToView } from './../../../interfaces/sales/SaleToView';
import { SaleService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewsales',
  templateUrl: './viewsales.component.html',
  styleUrls: ['./viewsales.component.css'],
})
export class ViewsalesComponent implements OnInit {
  dateSelect = new Date();
  total = 0;
  totalEfecty = 0;
  sales: Array<SaleToView> = [];
  date1: Date;
  date2: Date;

  constructor(private _salesService: SaleService) {
    //const data = new Date()
    //this.dateSelect = `${data.getMonth()+1}-${data.getDate()}-${data.getFullYear()}`
    this.date1 = new Date();

    this.date2 = new Date(
      this.date1.getFullYear(),
      this.date1.getMonth(),
      this.date1.getDate() - 1
    );
    this.listSalesForDate();
    console.log(this.date1);
    console.log(this.date2);
  }

  ngOnInit(): void {}

  listAllSales() {}

  listSalesForDate() {
    this._salesService.listByDate(this.date1, this.date2).subscribe((doc) => {
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
}
