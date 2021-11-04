import { SupplieIn } from './../products/supplieIn';

export interface ProductFr {
  description: string;
  supplies: Array<SupplieIn>[];
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;
}
