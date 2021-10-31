import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';
import { SuppliesComponent } from './supplies/supplies.component';

const routes: Routes = [
  {
    path: 'registersale',
    component: SaleComponent
  },
  {
    path: 'registerproduct',
    component: ProductComponent
  },
  {
    path: 'registersupplie',
    component: SuppliesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
