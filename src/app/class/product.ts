export class Product {

  description: string;
  supplies!: string;
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;

  constructor(description: string, supplies: string,costPrice: number,productionCost: number,salePrice: number, utility: number){
    this.description = description;
    this.supplies = supplies
    this.costPrice = costPrice;
    this.productionCost = productionCost;
    this.salePrice = salePrice;
    this.utility = utility;
  }

}
