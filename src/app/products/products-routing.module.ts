import { RegisterproductsComponent } from './registerproducts/registerproducts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registerproducts', component: RegisterproductsComponent },
      { path: '**', redirectTo: 'registerproducts' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
