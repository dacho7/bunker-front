import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'registersale',
    component: SaleComponent
  },
  {
    path: 'registerproduct',
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
