import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { RegistersalesComponent } from './registersales/registersales.component';
import { ViewsalesComponent } from './viewsales/viewsales.component';

@NgModule({
  declarations: [RegistersalesComponent, ViewsalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    AutocompleteLibModule,
  ],
})
export class SalesModule {}
