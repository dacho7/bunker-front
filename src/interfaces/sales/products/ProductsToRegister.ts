import { SupplieForProduct } from './../supplies/SupplieForProduct';

export interface ProductToRegister {
  descriptionProduct: string;
  descriptionForPublic: string;
  supplies: Array<SupplieForProduct>;
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;
}
