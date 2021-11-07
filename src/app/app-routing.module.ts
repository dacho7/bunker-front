import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';

const routes: Routes = [
  {
    path: 'registersale',
    loadChildren: () =>
      import('./sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: 'registerproduct',
    component: ProductComponent,
  },
  {
    path: 'registersupplie',
    component: SuppliesComponent,
  },
  {
    path: 'viewsales',
    component: SalesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
