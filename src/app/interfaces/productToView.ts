import { SuppliesForProduct } from './supplies/suppliesForProduct';

export interface ProductToView {
  id: string;
  description: string;
  supplies: Array<SuppliesForProduct>[];
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;
}
