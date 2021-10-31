export class Supplie {

  description!: string;
  unitPrice!: number;
  quantity!: number;
  expireDate!: Date;

  constructor(description: string, unitPrice: number, quantity: number, expireDate: Date){
    this.description = description;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.expireDate = expireDate;
  }

}
