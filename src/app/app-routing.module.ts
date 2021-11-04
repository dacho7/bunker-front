import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'supplies',
    loadChildren: () =>
      import('./supplies/supplies.module').then((m) => m.SuppliesModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  /* {
    path: 'sales',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  }, */

  /*  {
    path: 'registersale',
    component: SaleComponent,
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
  {
    path: 'adminsupplies',
    component: SuppliesproductComponent,
  },
  {
    path: '**',
    redirectTo: 'sal',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
