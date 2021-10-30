export class Product {

  description: string;
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;

  constructor(description: string, costPrice: number,productionCost: number,salePrice: number, utility: number){
    this.description = description;
    this.costPrice = costPrice;
    this.productionCost = productionCost;
    this.salePrice = salePrice;
    this.utility = utility;
  }

}
