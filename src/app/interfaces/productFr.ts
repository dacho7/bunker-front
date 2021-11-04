import { SuppliesForProduct } from './supplies/suppliesForProduct';

export interface ProductFr {
  id: string;
  description: string;
  supplies: Array<SuppliesForProduct>[];
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;
}
