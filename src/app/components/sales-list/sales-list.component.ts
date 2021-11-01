import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  dateSelect!: string;

  constructor() {
    //const data = new Date()
    //this.dateSelect = `${data.getMonth()+1}-${data.getDate()}-${data.getFullYear()}`
  }

  ngOnInit(): void {
  }

  listAllSales(){

  }

  listSalesForDate(){

  }

}
