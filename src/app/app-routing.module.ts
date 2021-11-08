import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sales',
    loadChildren: () =>
      import('../modules/sales/sales.module').then((m) => m.SalesModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'supplies',
    loadChildren: () =>
      import('../modules/supplies/supplies.module').then(
        (m) => m.SuppliesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
