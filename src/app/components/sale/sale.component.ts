import { SaleService } from '../../services/sales.service'
import { Component, Input, OnInit } from '@angular/core';
import { Sale } from '../../models/sale';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  name!: string;
  product!: string;
  quantity=1;
  methodPay = "efectivo";
  phone!: string;
  address!: string;
  email!: string;

  salesAvailables: Array<any> = [];

  constructor(private _saleService: SaleService) {
    this.methodPay = "efectivo";
    console.log("estoy en constructor");
    this.listAllSales();
  }

  ngOnInit(): void {
    console.log('estoy en ngOnInit');
  }

  registerSale(){
    if(!this.validateSale()) {
      return
    } else {
      if(!this.phone){
        this.phone = ""
      }
      if(!this.address){
        this.address = ""
      }
      if(!this.email){
        this.email = ""
      }
    }
    const sale: Sale = {
      client: this.name,
      product: this.product,
      quantity: this.quantity,
      methodPay: this.methodPay,
      phone: this.phone,
      address: this.address,
      email: this.email,
      state: "en preparacion",
      dateCreated: new Date()
    }
    this._saleService.saveSale(sale).then().catch(e => console.log(e));
  };

  validateSale(){
    if (!this.name || !this.product || !this.quantity || !this.address){
      alert("Digite todos los campos")
      return false
    }
    if (this.methodPay === "efectivo" || this.methodPay === "nequi" || this.methodPay === "daviplata" || this.methodPay === "tarjeta"){
      return true;
    } else {
      alert("Ingrese un metodo de pago valido (efectivo, targeta,nequi, daviplata)")
      return false
    }
  }

  sendOrder(id: string){
    this._saleService.sendOrder(id).then((res) => {
      this.listAllSales()
    }).catch( err => console.log(err))
  }

  listAllSales(){
    this._saleService.lisOnlyNotSend().subscribe(doc => {
      doc.forEach((element: any) => {
        const sale: Sale = {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
        this.salesAvailables.push(sale)
      });
    })
  }

  resetFields(){
    this.name = "";
    this.product = "";
    this.quantity = 1;
    this.phone = "";
    this.address = "";
    this.email = "";
    this.methodPay = "efectivo";
  }

}
