import { SupplieIn } from './../products/supplieIn';
export class Product {
  description: string;
  descriptionForCliente: string;
  supplies!: Array<SupplieIn>;
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;

  constructor(
    description: string,
    descriptionForClient: string,
    supplies: Array<SupplieIn>,
    costPrice: number,
    productionCost: number,
    salePrice: number,
    utility: number
  ) {
    this.description = description;
    this.descriptionForCliente = descriptionForClient;
    this.supplies = supplies;
    this.costPrice = costPrice;
    this.productionCost = productionCost;
    this.salePrice = salePrice;
    this.utility = utility;
  }
}
