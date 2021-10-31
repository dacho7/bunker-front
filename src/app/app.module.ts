import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';
import { SuppliesComponent } from './supplies/supplies.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProductComponent,
    SuppliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
