import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SaleComponent } from './components/sale/sale.component';
import { ProductComponent } from './components/product/product.component';
import { SuppliesComponent } from './components/supplies/supplies.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    ProductComponent,
    SuppliesComponent,
    SalesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
