import { SupplieForProduct } from './../supplies/SupplieForProduct';

export interface ProductToView {
  id: string;
  description: string;
  supplies: Array<SupplieForProduct>;
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;
}
