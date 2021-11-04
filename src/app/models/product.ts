import { SuppliesForProduct } from './../interfaces/supplies/suppliesForProduct';
export class Product {
  descriptionProduct: string;
  descriptionForPublic: string;
  supplies!: Array<SuppliesForProduct>;
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;

  constructor(
    description: string,
    descriptionForClient: string,
    supplies: Array<SuppliesForProduct>,
    costPrice: number,
    productionCost: number,
    salePrice: number,
    utility: number
  ) {
    this.descriptionProduct = description;
    this.descriptionForPublic = descriptionForClient;
    this.supplies = supplies;
    this.costPrice = costPrice;
    this.productionCost = productionCost;
    this.salePrice = salePrice;
    this.utility = utility;
  }
}
