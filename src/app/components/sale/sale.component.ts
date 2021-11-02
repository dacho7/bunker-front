import { SaleService } from '../../services/sales.service'
import { Component, OnInit } from '@angular/core';
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
  price=2000;

  salesAvailables: Array<any> = [];

  constructor(private _saleService: SaleService) {}

  ngOnInit(): void {
    this._saleService.lisOnlyNotSend().subscribe(doc => {
      this.salesAvailables = [];
      doc.forEach((element: any) => {
        const sale: Sale = {
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        }
        this.salesAvailables.push(sale)
      });
    })
  }

  registerSale(){
    console.log('in registersales');
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
      dateCreated: new Date(),
      price:this.price
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
    console.log('in sendorder');
    this._saleService.sendOrder(id).then().catch( err => console.log(err))
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
