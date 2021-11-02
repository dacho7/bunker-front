import { Sale } from '../../models/sale'
import { SaleService } from './../../services/sales.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  dateSelect=new Date();

  sales: Array<any> = [];

  constructor(private _salesService: SaleService) {
    //const data = new Date()
    //this.dateSelect = `${data.getMonth()+1}-${data.getDate()}-${data.getFullYear()}`
    this.listSalesForDate();
  }

  ngOnInit(): void {
  }

  listAllSales(){

  }

  listSalesForDate(){
    this._salesService.viewSalesfromData(this.dateSelect).subscribe(doc => {
      doc.forEach((element: any) => {
        const sale: Sale = {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
        this.sales.push(sale)
      });
    })
  }

}
