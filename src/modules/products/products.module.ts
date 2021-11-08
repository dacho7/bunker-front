import { RegisterproductsComponent } from './registerproducts/registerproducts.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [RegisterproductsComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}
