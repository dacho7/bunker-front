import { RefSupplie } from './refSupplie';

export interface ProductFr {
  description: string;
  supplies: Array<RefSupplie>[];
  costPrice: number;
  productionCost: number;
  salePrice: number;
  utility: number;
}
